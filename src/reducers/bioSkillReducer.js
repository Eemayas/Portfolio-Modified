import {FETCH_BIOSKILL_SUCCESS,POST_BIOSKILL_SUCCESS,PATCH_BIOSKILL_SUCCESS,DELETE_BIOSKILL_SUCCESS} from "../constant"
const initialState = {
    data: [],
  };
  
  const BioSkillReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BIOSKILL_SUCCESS: console.log(state,action);
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default BioSkillReducer;
  