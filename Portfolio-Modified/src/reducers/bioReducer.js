import {
  FETCH_BIO_SUCCESS,
  POST_BIO_SUCCESS,
  PATCH_BIO_SUCCESS,
} from "../constant";
const initialState = {
  data: [],
};

const BioReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BIO_SUCCESS:
      // console.log(state,action);
      return action.payload;
    case POST_BIO_SUCCESS:
      return [...state, action.payload];
    case PATCH_BIO_SUCCESS:
      return state.map((bio) =>
        bio._id === action.payload._id ? action.payload : bio
      );
    default:
      return state;
  }
};

export default BioReducer;
