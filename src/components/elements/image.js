import React from 'react';
import { connect } from 'react-redux';

const Image = (props) => (
   <img className="player_image" src={props.src}
   style={
      props.imageToCover 
      ? {
         height: '100%',
         width: '100%',
         objectFit: 'cover'
      }
      : {
         height: '100%',
         width: '100%',
         objectFit: 'contain'
      }
   }/>
)

const mapStateToProps = state => {
   return {
       sbsActive: state.sbsActive,
       imageToCover: state.imageToCover
   }
}

export default connect(mapStateToProps)(Image);