import {
   SET_SBS_ACTIVE,
   SET_PLAY_ON_FOCUS_LOST,
   SET_TUMBLR_DIALOG_OPEN,
   SET_TIMING_DIALOG_OPEN,
   SET_TEXT_DIALOG_OPEN,
   SET_HELP_DIALOG_OPEN,
   SET_CONTENT_LOADING,
   SET_CONTENT_PLAYING,
   ADD_TUMBLR,
   REMOVE_TUMBLR,
   ADD_TUMBLR_LINK,
   ADD_TUMBLR_IMG,
   CLEAR_ALL_DATA,
   MODIFY_TIMING_SPEED,
   DESYNC_SBS,
   COVER_IMAGE
} from "../constants";

const initialState = {
   sbsActive: false,
   playOnLostFocus: true,
   tumblrDialogOpen: false,
   timingDialogOpen: false,
   textDialogOpen: false,
   helpDialogOpen: false,
   loading: false,
   playing: false,
   tumblrs: [],
   links: [],
   images: [],
   timingSpeed: 4000,
   desyncSBS: false,
   imageToCover: false
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SBS_ACTIVE:
         return { ...state, sbsActive: !state.sbsActive };
      case SET_PLAY_ON_FOCUS_LOST:
         return { ...state, playOnLostFocus: !state.playOnLostFocus };
      case SET_TUMBLR_DIALOG_OPEN:
         return { ...state, tumblrDialogOpen: !state.tumblrDialogOpen };
      case SET_TIMING_DIALOG_OPEN:
         return { ...state, timingDialogOpen: !state.timingDialogOpen };
      case SET_TEXT_DIALOG_OPEN:
         return { ...state, textDialogOpen: !state.textDialogOpen };
      case SET_HELP_DIALOG_OPEN:
         return { ...state, helpDialogOpen: !state.helpDialogOpen };
      case SET_CONTENT_LOADING:
         return { ...state, loading: !state.loading };
      case SET_CONTENT_PLAYING:
         return { ...state, playing: !state.playing };
      case ADD_TUMBLR:
         return { ...state, tumblrs: [...state.tumblrs, action.payload] };
      case REMOVE_TUMBLR:
         return {
            ...state,
            tumblrs: state.tumblrs.filter(item => item !== action.payload)
         };
      case ADD_TUMBLR_LINK:
         return { ...state, links: [...state.links, action.payload] };
      case ADD_TUMBLR_IMG:
         return { ...state, images: [...state.images, action.payload] };
      case CLEAR_ALL_DATA:
         return { ...state, images: [], links: [] };
      case MODIFY_TIMING_SPEED:
         return { ...state, timingSpeed: action.payload };
      case DESYNC_SBS:
         return { ...state, desyncSBS: !state.desyncSBS };
      case COVER_IMAGE:
         return { ...state, imageToCover: !state.imageToCover };
      default:
         return state;
   }
};

export default rootReducer;
