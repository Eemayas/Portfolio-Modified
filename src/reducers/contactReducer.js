import {FETCH_CONTACT_SUCCESS,POST_CONTACT_SUCCESS,PATCH_CONTACT_SUCCESS,DELETE_CONTACT_SUCCESS} from "../constant"

const initialState = {
    data: [],
  };
  
  const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONTACT_SUCCESS: console.log(state,action);
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default ContactReducer;
  