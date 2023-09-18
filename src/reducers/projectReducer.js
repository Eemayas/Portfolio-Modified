import {FETCH_PROJECT_SUCCESS,POST_PROJECT_SUCCESS,PATCH_PROJECT_SUCCESS,DELETE_PROJECT_SUCCESS} from "../constant"
const initialState = {
    data: [],
  };
  
  const ProjectReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_PROJECT_SUCCESS: console.log(state,action);
        return action.payload ;
        case POST_PROJECT_SUCCESS:
          return [...state, action.payload];
        case PATCH_PROJECT_SUCCESS:
          return state.map((project) =>
            project._id === action.payload._id ? action.payload : project
          );
        case DELETE_PROJECT_SUCCESS:
          return state.filter((project) => project._id !== action.payload);
    
      default:
        return state;
    }
  };
  
  export default ProjectReducer;
  