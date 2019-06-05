import {
   SET_SBS_ACTIVE,
   SET_PLAY_ON_FOCUS_LOST,
   SET_TUMBLR_DIALOG_OPEN,
   SET_TIMING_DIALOG_OPEN,
   SET_TEXT_DIALOG_OPEN,
   SET_HELP_DIALOG_OPEN,
   SET_CONTENT_LOADING,
   SET_CONTENT_PLAYING,
   SET_TUMBLR_LIST,
   ADD_TUMBLR,
   REMOVE_TUMBLR,
   ADD_TUMBLR_LINK,
   ADD_TUMBLR_IMG,
   MODIFY_TIMING_SPEED,
   DESYNC_SBS,
   CLEAR_ALL_DATA,
   COVER_IMAGE
} from './constants';

// General State Functions
export const setSBSActive = sbs => ({ type: SET_SBS_ACTIVE, payload: sbs });
export const playOnFocusLost = focus => ({ type: SET_PLAY_ON_FOCUS_LOST, payload: focus });
export const setContentLoading = loading => ({ type: SET_CONTENT_LOADING, payload: loading });
export const setContentPlaying = playing => ({ type: SET_CONTENT_PLAYING, payload: playing });
export const modifyTimingSpeed = value => ({ type: MODIFY_TIMING_SPEED, payload: value});
export const desyncSBS = sbs => ({ type: DESYNC_SBS, payload: sbs});
export const setImageCover = value => ({type: COVER_IMAGE, payload: value});

// Dialog State Functions
export const setTumblrDialogOpen = open => ({ type: SET_TUMBLR_DIALOG_OPEN, payload: open });
export const setTimingDialogOpen = open => ({ type: SET_TIMING_DIALOG_OPEN, payload: open });
export const setTextDialogOpen = open => ({ type: SET_TEXT_DIALOG_OPEN, payload: open });
export const setHelpDialogOpen = open => ({ type: SET_HELP_DIALOG_OPEN, payload: open });

// Content Functions
export const setTumblrList = list => ({ type: SET_TUMBLR_LIST, payload: list });
export const addTumblr = name => ({ type: ADD_TUMBLR, payload: name });
export const removeTumblr = name => ({ type: REMOVE_TUMBLR, payload: name });
export const addTumblrLink = name => ({ type: ADD_TUMBLR_LINK, payload: name });
export const addTumblrImage = img => ({ type: ADD_TUMBLR_IMG, payload: img});

// Utility Functions
export const clearAllData = value => ({type: CLEAR_ALL_DATA, payload: value});