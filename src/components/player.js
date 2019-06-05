/*
    Handles loading of images added via the tumblr modal.
    Loads in images via axios, then pushes each image to an
    images array handled by redux once the image is fully loaded.
*/

import React, {Component} from 'react';
import Image from './elements/image';
import { connect } from 'react-redux';
import store from '../redux/store';
import { setContentLoading } from '../redux/actions';


class Player extends Component {
    state = {
        links: [],
        imageValue: '',
        imageValue2: ''
    }

    playerRandomizer = setInterval(this.getRandomImage, this.props.timingSpeed);
    playerRandomizer2 = setInterval(this.getRandomImage2, this.props.timingSpeed);

    getRandomImage = () => {
        if(this.props.images.length === 0) {
            return null;
        }
        let randomIMG = Math.floor(Math.random() * this.props.images.length);
        let img = this.props.images[randomIMG];
        this.setState({imageValue: img.src});
    }

    getRandomImage2 = () => {
        if(this.props.images.length === 0) {
            return null;
        }
        let randomIMG = Math.floor(Math.random() * this.props.images.length);
        let img = this.props.images[randomIMG];
        this.setState({imageValue2: img.src});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.playing && this.props.loading){
            store.dispatch(setContentLoading())
        }
        if(prevProps.playing !== this.props.playing && this.props.playing){
            if(this.props.sbsActive){
                this.playerRandomizer = setInterval(this.getRandomImage, this.props.timingSpeed);
                this.playerRandomizer2 = setInterval(this.getRandomImage2, this.props.timingSpeed);
            } else {
                this.playerRandomizer = setInterval(this.getRandomImage, this.props.timingSpeed);
            }
            
        }
        if(prevProps.playing !== this.props.playing && !this.props.playing){
            clearInterval(this.playerRandomizer);
            clearInterval(this.playerRandomizer2);
        }
        // If sbs isn't active, make sure we clear the second randomizer.
        if(!this.props.sbsActive){
            clearInterval(this.playerRandomizer2);
        }
    }

    render(){
        return(
            <>
            <div className="player_wrapper">
                <div className="player">
                    {
                    this.props.images.length > 0 && this.props.playing
                    ? <Image src={this.state.imageValue}/>
                    : null
                    }
                </div>
                { this.props.sbsActive
                ?
                <div className="player">
                    {
                    this.props.images.length > 0 && this.props.playing
                    ? <Image src={this.props.desyncSBS ? this.state.imageValue2 : this.state.imageValue}/>
                    : null
                    }
                </div>
                :
                null
                }
            </div>
            
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        sbsActive: state.sbsActive,
        images: state.images,
        playing: state.playing,
        timingSpeed: state.timingSpeed,
        loading: state.loading,
        desyncSBS: state.desyncSBS
    }
}

export default connect(mapStateToProps)(Player);