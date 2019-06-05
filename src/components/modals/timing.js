/*
   Handles changing timing and playback timescale.
   Triggered inside components/header.js.
   Modal handled by @blueprintjs, timing handled via Redux.
*/

import React, { Component } from 'react';
import { Dialog, Classes, NumericInput, Checkbox } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { modifyTimingSpeed, desyncSBS, setImageCover } from '../../redux/actions';



class TimingModal extends Component {
   state = {
      speed: this.props.timingSpeed
   }

   handleNumberInput = (value) => {
      this.setState({speed: value});
      console.log(value);
      store.dispatch(modifyTimingSpeed(value));
    }

   render(){
      return(
         <Dialog className={"bp3-dark " + Classes.DIALOG} onClose={this.props.toggle} 
         isOpen={this.props.open} title="Change Timing" icon={<FontAwesomeIcon icon="clock"/>}>
            <div className={Classes.DIALOG_BODY}>
               <p>Define how long you want each image to be on screen. <br/><small><i>Time is in milliseconds. (1000ms = 1 second)</i></small></p>
               <NumericInput stepSize="250" min="0" minorStepSize={null} majorStepSize={null} 
               onValueChange={e=>this.handleNumberInput(e)} value={this.state.speed} style={{border: '1px solid #A7B6C2'}}
                  leftIcon={<FontAwesomeIcon className="input-icon" icon="clock"/>} placeholder="Set time between images"/>
               <Checkbox checked={this.props.desyncSBS} onChange={() => store.dispatch(desyncSBS())} 
                  label="Desync SBS images?" style={{marginTop: '1em'}}/>
               <Checkbox checked={this.props.imageToCover} onChange={() => store.dispatch(setImageCover())} 
                  label="Have images cover entire view?" style={{marginTop: '1em'}}/>
            </div>
         </Dialog>
      )
   }
   
}

const mapStateToProps = state => {
   return {
     timingSpeed: state.timingSpeed,
     desyncSBS: state.desyncSBS,
     imageToCover: state.imageToCover
   }
}

export default connect(mapStateToProps)(TimingModal);