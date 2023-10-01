import {
  FETCH_BIOCARD_SUCCESS,
  POST_BIOCARD_SUCCESS,
  PATCH_BIOCARD_SUCCESS,
  DELETE_BIOCARD_SUCCESS,
} from "../constant";

const BioCardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BIOCARD_SUCCESS:
      // console.log(state, action);
      return action.payload;
    case POST_BIOCARD_SUCCESS:
      return [...state, action.payload];
    case PATCH_BIOCARD_SUCCESS:
      return state.map((bioCard) =>
        bioCard._id === action.payload._id ? action.payload : bioCard
      );
    case DELETE_BIOCARD_SUCCESS:
      return state.filter((bioCard) => bioCard._id !== action.payload);
    default:
      return state;
  }
};

export default BioCardReducer;
