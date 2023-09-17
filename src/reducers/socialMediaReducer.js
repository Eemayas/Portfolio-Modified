import {FETCH_SOCIAL_MEDIA_SUCCESS,POST_SOCIAL_MEDIA_SUCCESS,PATCH_SOCIAL_MEDIA_SUCCESS,DELETE_SOCIAL_MEDIA_SUCCESS} from "../constant"

const initialState = {
    data: [],
  };
  
  const SocialMediaReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SOCIAL_MEDIA_SUCCESS: console.log(state,action);
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default SocialMediaReducer;
  