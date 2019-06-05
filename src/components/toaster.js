/* 
    Provides a pop-up with relevant information.
*/

import { Position, Toaster } from '@blueprintjs/core';

export const MsgToaster = Toaster.create({
    className: 'msg-toaster',
    position: Position.BOTTOM,
    usePortal: false
});