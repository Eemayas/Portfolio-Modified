import {FETCH_BIOCARD_SUCCESS,POST_BIOCARD_SUCCESS,PATCH_BIOCARD_SUCCESS,DELETE_BIOCARD_SUCCESS} from "../constant"
const initialState = {
    data: [],
  };
  
  const BioCardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BIOCARD_SUCCESS: console.log(state,action);
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default BioCardReducer;
  