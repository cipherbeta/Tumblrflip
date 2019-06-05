/*
   Handles loading of images added via the tumblr modal.
   Loads in images via axios, then pushes each image to an
   images array handled by redux once the image is fully loaded.
*/

import React, { Component } from 'react';

// Utility
import axios from 'axios';

// BlueprintJS
import {
   MsgToaster
} from './toaster';
import {
   Intent
} from '@blueprintjs/core';

// Redux
import store from '../redux/store';
import {
   connect
} from 'react-redux';
import {
   removeTumblr
} from '../redux/actions';
import {
   addTumblrLink,
   addTumblrImage,
   setContentLoading
} from '../redux/actions';

// Keys
import {
   url_start,
   url_end,
   consumer_key
} from '../helpers/keys';

class ImageLoader extends Component {

   urlPromises = [];

   // Gets image URLs and pushes to array.
   getImageLinks = (callback) => {
      this.props.tumblrs.forEach((name) => {
         const promise = axios
            .get(`${url_start}${name}${url_end}?api_key=${consumer_key}`)
            .then(item => {
               let posts = item.data.response.posts;
               // clips so we only load 20 items from each tumblr. 
               // TODO: Make this adjustable via UI?
               posts.length = Math.min(posts.length, 50);
               posts.forEach(postitem => {
                  if(postitem.photos !== undefined){
                     let url = postitem.photos[0].original_size.url
                     if(!this.props.links.includes(url)){
                        store.dispatch(addTumblrLink(url))
                     }
                  }
               });
            }).catch(error => {
               console.log(error);
               // If we get a 404, pop a toast that informs the user
               // that a certain tumblr doesn't exist.
               if (error.response) {
                  if (error.response.data.meta.status === 404) {
                     MsgToaster.show({
                        message: `${name} doesn't exist.`,
                        intent: Intent.DANGER,
                        timeout: 3000,
                        action: {
                           onClick: () => {
                              store.dispatch(removeTumblr(name));
                           },
                           text: `Remove Tumblr`
                        }
                     });
                  } else {
                     // If we get some other error, pop a toast that informs
                     // the user that something went wrong.
                     MsgToaster.show({
                        message: `${error.response.data.meta.status} error. Check console for more information.`,
                        intent: Intent.DANGER,
                        timeout: 3000,
                     });
                  }
               }
            }
         )
         this.urlPromises.push(promise);
      })
      Promise.all(this.urlPromises).then(callback)
   }

   

   getImages = (callback) => {
      this.props.links.forEach((url, i) => {
         if(this.props.images.filter(existingIMG => existingIMG.src === url).length === 0){
            const img = document.createElement('img');
            img.src = url;
            img.onload = () => {
               store.dispatch(addTumblrImage(img));
            } 
         } else {
            return null;
         }
      })
   }

   // Checks if loading state is true, then runs image getter.
   componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.loading !== this.props.loading){
         if(this.props.loading){
            this.getImageLinks(this.getImages);
         }
      }
      // if(this.props.links.length === this.props.images.length && this.props.loading) {

      // }
   }
   
   // Returns null so React doesn't complain about returning an undefined object.
   render(){
      return (null);
   }
   
};

const mapStateToProps = state => {
   return {
      loading: state.loading,
      tumblrs: state.tumblrs,
      links: state.links,
      images: state.images
   }
}

export default connect(mapStateToProps)(ImageLoader);