import {
  FETCH_TESTIMONIAL_SUCCESS,
  POST_TESTIMONIAL_SUCCESS,
  PATCH_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_SUCCESS,
} from "../constant";

const TestimonialReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TESTIMONIAL_SUCCESS:
      // console.log(state, action);
      return action.payload ;
      case POST_TESTIMONIAL_SUCCESS:
        return [...state, action.payload];
      case PATCH_TESTIMONIAL_SUCCESS:
        return state.map((testmonial) =>
        testmonial._id === action.payload._id ? action.payload : testmonial
        );
      case DELETE_TESTIMONIAL_SUCCESS:
        return state.filter((testmonial) => testmonial._id !== action.payload);
  
      default:
        return state;
  }
};


export default TestimonialReducer;
