import {
  FETCH_CONTACT_SUCCESS,
  POST_CONTACT_SUCCESS,
  PATCH_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from "../constant";

const ContactReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      // console.log(state, action);
      return action.payload;
    case POST_CONTACT_SUCCESS:
      return [...state, action.payload];
    case PATCH_CONTACT_SUCCESS:
      return state.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );
    case DELETE_CONTACT_SUCCESS:
      return state.filter((contact) => contact._id !== action.payload);
    default:
      return state;
  }
};

export default ContactReducer;
