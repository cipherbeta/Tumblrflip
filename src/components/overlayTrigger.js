/*
      Handles clicking/tapping on open screen space to start
      playing/pausing process. Also includes a faked version
      of the split screen to assist with lining up SBS viewers.
*/

import React from 'react';

// Redux Elements
import { setContentPlaying } from '../redux/actions';
import { connect } from 'react-redux';
import store from '../redux/store';

// Custom Elements
import OverlayNonIdealStates from './overlayNonIdealStates';

const OverlayTrigger = (props) => {
   return(
      <>
      <div id="overlay-trigger" onClick={()=>store.dispatch(setContentPlaying())}>
            <div className="overlay-trigger--focal">
                  <OverlayNonIdealStates/>
            </div>
            { props.sbsActive
            ?
            <div className="overlay-trigger--focal" style={props.playing ? null : {borderLeft: '1px solid #182026'}}>
                  <OverlayNonIdealStates/>
            </div>
            : null
            }
      </div>
      </>
   )
}

const mapStateToProps = state => {
      return {
            sbsActive: state.sbsActive,
            playing: state.playing
      }
}

export default connect(mapStateToProps)(OverlayTrigger);

