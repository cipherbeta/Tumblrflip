/*
  Handles adding playback text or copypasta over the player.
  Triggered inside components/header.js.
  Modal handled by @blueprintjs, text/copypasta values modified via Redux.
*/

import React from 'react';
import { Dialog, Classes, Button } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextModal = (props) => (
   <Dialog className={"bp3-dark " + Classes.DIALOG} onClose={props.toggle} 
   isOpen={props.open} title="Add Text Overlay" icon={<FontAwesomeIcon icon="font"/>}>
      <div className={Classes.DIALOG_BODY}>
      <Button text="blah"/>
      </div>
   </Dialog>
)

export default TextModal;