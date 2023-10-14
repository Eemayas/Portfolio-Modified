// src/reducers/dataReducer.js
import {
  FETCH_EXPERIENCES_SUCCESS,
  // POST_EXPERIENCES_SUCCESS,
  // PATCH_EXPERIENCES_SUCCESS,
  // DELETE_EXPERIENCES_SUCCESS,
} from "../constant";

const ExperiencesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ExperiencesReducer;
