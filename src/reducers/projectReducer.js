import {FETCH_PROJECT_SUCCESS,POST_PROJECT_SUCCESS,PATCH_PROJECT_SUCCESS,DELETE_PROJECT_SUCCESS} from "../constant"
const initialState = {
    data: [],
  };
  
  const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROJECT_SUCCESS: console.log(state,action);
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default ProjectReducer;
  