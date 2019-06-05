/*
    Handles a notification section in the middle of the screen.
*/

import React from 'react';

// BlueprintJS Elements
import { NonIdealState } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux 
import { connect } from 'react-redux';

// React Pose Elements
import posed, { PoseGroup } from 'react-pose';

const NonIdealStateContainer = posed.div({
      enter: {opacity: 1, y: 0, delay: 100, transition: { duration: 250 }},
      exit: {opacity: 0, y: 10, transition: { duration: 150 }}
});

const OverlayNonIdealStates = (props) => (
    <PoseGroup>
        {   props.playing 
        ?   null
        :   props.loading 
        ?   props.tumblrs.length > 0
        ?   <NonIdealStateContainer key="ContentLoad">
                    <NonIdealState 
                    title={`Loading in pics from ${props.tumblrs.length} source${props.tumblrs.length > 1 ? "s" : ""}...`}
                    description={
                        `Got ${props.links.length} url${props.links.length > 1 ? "s" : ""} and 
                        ${props.images.length} image${props.links.length > 1 ? "s" : ""}. Click me!`}
                    icon={<FontAwesomeIcon icon="spinner" spin={true}/>}/>
            </NonIdealStateContainer>
        :   <NonIdealStateContainer key="noContentContentLoad">
                    <NonIdealState 
                    title={`You need to add in some tumblrs!`}
                    description={`Hit the plus icon on the top right to add in a few.`}
                    icon={<FontAwesomeIcon icon="frown"/>}/>
            </NonIdealStateContainer>
        :   props.tumblrs.length > 0
        ?   props.images.length > 0
        ?   <NonIdealStateContainer key="ContentReady">
                <NonIdealState 
                title={`We've got ${props.images.length} image${props.tumblrs.length > 1 ? "s" : ""}.`}
                description="Click me to play!"
                icon={<FontAwesomeIcon icon="grin-wink" />}/>
            </NonIdealStateContainer>
        
        :   <NonIdealStateContainer key="ContentnoLoad">
                <NonIdealState 
                title={`We've got ${props.tumblrs.length} source${props.tumblrs.length > 1 ? "s" : ""}. Preload!`}
                description="Hit the 'preload images' prompt up top to start loading."
                icon={<FontAwesomeIcon icon="grin-wink" />}/>
            </NonIdealStateContainer>
        :   <NonIdealStateContainer key="noContentnoLoad">
                    <NonIdealState 
                    title="Add some tumblrs to get started!"
                    description="Hit the plus icon in the top right."
                    icon={<FontAwesomeIcon icon="meh-blank" />}/>
            </NonIdealStateContainer>
        }
    </PoseGroup>
)

const mapStateToProps = state => {
    return {
        loading: state.loading,
        playing: state.playing,
        tumblrs: state.tumblrs,
        links: state.links,
        images: state.images
    }
}

export default connect(mapStateToProps)(OverlayNonIdealStates);