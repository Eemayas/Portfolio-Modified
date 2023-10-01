import {
  FETCH_TESTIMONIAL_SUCCESS,
  POST_TESTIMONIAL_SUCCESS,
  PATCH_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_SUCCESS,
} from "../constant";
const initialState = {
  data: [],
};

const TestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTIMONIAL_SUCCESS:
      // console.log(state, action);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default TestimonialReducer;
