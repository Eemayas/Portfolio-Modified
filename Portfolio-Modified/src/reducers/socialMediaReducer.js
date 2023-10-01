import {
  FETCH_SOCIAL_MEDIA_SUCCESS,
  POST_SOCIAL_MEDIA_SUCCESS,
  PATCH_SOCIAL_MEDIA_SUCCESS,
  DELETE_SOCIAL_MEDIA_SUCCESS,
} from "../constant";

const SocialMediaReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SOCIAL_MEDIA_SUCCESS:
      // console.log(state, action);
      return action.payload;
    case POST_SOCIAL_MEDIA_SUCCESS:
      return [...state, action.payload];
    case PATCH_SOCIAL_MEDIA_SUCCESS:
      return state.map((social) =>
        social._id === action.payload._id ? action.payload : social
      );
    case DELETE_SOCIAL_MEDIA_SUCCESS:
      return state.filter((social) => social._id !== action.payload);
    default:
      return state;
  }
};

export default SocialMediaReducer;
