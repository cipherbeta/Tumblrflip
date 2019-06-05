/*
      Provides some context on the project, and shows links to resources.
      Triggered inside components/header.js.
      Modal handled by @blueprintjs.
*/

import React from 'react';
import { Dialog, Classes, Button } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HelpModal = (props) => (
      <Dialog className={"bp3-dark " + Classes.DIALOG} onClose={props.toggle} 
            isOpen={props.open} title=" Project Info" icon={<FontAwesomeIcon icon="question"/>}>
      <div className={Classes.DIALOG_BODY}>
            <p>
                  TumblrFlip is an entirely open-source project, meant
                  to create a slideshow generator for tumblr blogs.
                  It's built using ReactJS, Redux, BlueprintJS, and React-Pose.
                  You can check out the repo via the button below if you're interested
                  in helping out with the project, or you
                  can buy me some caffiene to give me motivation to keep working on this project.
                  It's appreciated no matter what you do. If you've found a problem/bug/etc,
                  shoot me a message via gitlab, or hmu via discord and let me know what's happening.
            </p>
            <p style={{textAlign: "center"}}>
                  Cheers, and have fun. ~WaifuCannon
            </p>
      </div>
      <div className={Classes.DIALOG_FOOTER} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Button minimal icon={<FontAwesomeIcon icon={['fab', 'discord']}/>} text="Discord"/>
            <a href="https://gitlab.com/WaifuCannon/tumblrflip" target="_blank" rel="noopener noreferrer">
                  <Button minimal icon={<FontAwesomeIcon icon={['fab', 'gitlab']}/>} text="View Project on Gitlab"/>
            </a>
            <Button minimal icon={<FontAwesomeIcon icon={['fab', 'paypal']}/>} text="Donate"/>
      </div>
   </Dialog>
)

export default HelpModal;