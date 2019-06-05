import React from 'react';
import { MsgToaster } from './toaster';
import { Intent } from '@blueprintjs/core';

// redux handlers
import store from '../redux/store';
import { removeTumblr } from '../redux/actions';

const ErrorToaster = (props) => {
    if(props.error === 404){
        console.log(props.error);
        MsgToaster.show({ 
            message: `${props.item} doesn't exist.`, 
            intent: Intent.DANGER,
            timeout: 3000,
            action: {
                onClick: () => {
                    store.dispatch(removeTumblr(props.item));
                },
                text: `Remove Tumblr`
            }
        });
    } else {
        // If we get some other error, pop a toast that informs
        // the user that something went wrong.
        MsgToaster.show({ 
            message: `${props.error} error. Check console for more information.`, 
            intent: Intent.DANGER,
            timeout: 3000,
        });
    }
}

export default ErrorToaster;