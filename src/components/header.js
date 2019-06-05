/*
      Manages everything in regards to the header. All functionality
      is handled via Redux and @blueprintjs modals. Uses @blueprintjs
      for layout and general styles.
*/

import React, {Component} from 'react';

// BlueprintJS Elements
import { Navbar, Alignment, Position, Button, Tooltip, NavbarDivider, AnchorButton } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux Elements
import { playOnFocusLost, setTumblrDialogOpen, setTimingDialogOpen,
         setTextDialogOpen, setHelpDialogOpen, setSBSActive, setContentLoading, clearAllData } from '../redux/actions';
import { connect } from 'react-redux';
import store from '../redux/store';

// Modals
import TumblrModal from './modals/tumblrs';
import TimingModal from './modals/timing';
import TextModal from './modals/text';
import HelpModal from './modals/help';

class Header extends Component {
   state = {

   }

   render(){
      return(
         <>
         <Navbar className={"header" + (this.props.playing ? " hidden" : "")}>
            <Navbar.Group align={Alignment.LEFT} className="header--logo">
               <Navbar.Heading>TUMBLR-FLIP <small>v0.1.1</small></Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT} className="header--nav">
               <Tooltip content="Starts preloading images based on your list." position={Position.BOTTOM}>
                  <Button intent={this.props.loading ? "success" : "none"} text="Preload"
                     onClick={()=>store.dispatch(setContentLoading())} minimal icon={<FontAwesomeIcon icon="truck-loading"/>}/>
               </Tooltip>
               <NavbarDivider/>
               <Tooltip content="Enable SBS mode." position={Position.BOTTOM}>
                  <Button intent={this.props.sbsActive ? "primary" : "none"}
                     onClick={()=>store.dispatch(setSBSActive())} minimal icon={<FontAwesomeIcon icon="columns"/>}/>
               </Tooltip>
               <Tooltip content="Clear page cache. (images, urls, keeps tumblrs)" position={Position.BOTTOM}>
                  <Button
                     onClick={()=>store.dispatch(clearAllData())} minimal icon={<FontAwesomeIcon icon="trash"/>}/>
               </Tooltip>
               <NavbarDivider/>
               <Tooltip content="Add Tumblrs to flip through." position={Position.BOTTOM}>
                  <Button onClick={()=>store.dispatch(setTumblrDialogOpen())} minimal icon={<FontAwesomeIcon icon={"plus"}/>}/>
               </Tooltip>
               <Tooltip content="Change timing for how quickly pictures change." position={Position.BOTTOM}>
                  <Button onClick={()=>store.dispatch(setTimingDialogOpen())} minimal icon={<FontAwesomeIcon icon="clock"/>}/>
               </Tooltip>
               {/* <Tooltip content="Coming soon - Add a text overlay with various messages." position={Position.BOTTOM}>
                  <AnchorButton disabled onClick={()=>store.dispatch(setTextDialogOpen())} minimal icon={<FontAwesomeIcon icon="font"/>}/>
               </Tooltip>
               <Tooltip content="Coming soon - Overlay a YT video onto the screen." position={Position.BOTTOM}>
                  <AnchorButton disabled onClick={()=>store.dispatch(setTextDialogOpen())} minimal icon={<FontAwesomeIcon icon="film"/>}/>
               </Tooltip> */}
               {/* <Tooltip content="Information about this project." position={Position.BOTTOM}>
                  <Button onClick={()=>store.dispatch(setHelpDialogOpen())} minimal icon={<FontAwesomeIcon icon="question"/>}/>
               </Tooltip> */}
            </Navbar.Group>
         </Navbar>
         <TumblrModal open={this.props.tumblrDialogOpen} toggle={()=>store.dispatch(setTumblrDialogOpen())}/>
         <TimingModal open={this.props.timingDialogOpen} toggle={()=>store.dispatch(setTimingDialogOpen())}/>
         <TextModal open={this.props.textDialogOpen} toggle={()=>store.dispatch(setTextDialogOpen())}/>
         <HelpModal open={this.props.helpDialogOpen} toggle={()=>store.dispatch(setHelpDialogOpen())}/>
         </>
      )
   }
}

const mapStateToProps = state => {
   return {
      sbsActive: state.sbsActive,
      playOnLostFocus: state.playOnLostFocus,
      tumblrDialogOpen: state.tumblrDialogOpen,
      timingDialogOpen: state.timingDialogOpen,
      textDialogOpen: state.textDialogOpen,
      helpDialogOpen: state.helpDialogOpen,
      loading: state.loading,
      playing: state.playing
   }
}

export default connect(mapStateToProps)(Header);