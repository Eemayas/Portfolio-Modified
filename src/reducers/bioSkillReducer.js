import {
  FETCH_BIOSKILL_SUCCESS,
  POST_BIOSKILL_SUCCESS,
  PATCH_BIOSKILL_SUCCESS,
  DELETE_BIOSKILL_SUCCESS,
} from "../constant";


const BioSkillReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BIOSKILL_SUCCESS:
      console.log(state, action);
      return action.payload;
    case POST_BIOSKILL_SUCCESS:
      return [...state, action.payload];
    case PATCH_BIOSKILL_SUCCESS:
      return state.map((bioSkill) =>
        bioSkill._id === action.payload._id ? action.payload : bioSkill
      );
    case DELETE_BIOSKILL_SUCCESS:
      return state.filter((bioSkill) => bioSkill._id !== action.payload);

    default:
      return state;
  }
};

export default BioSkillReducer;
