import { IS_ADMIN } from "../constant";

const AdminReducer = (state = false, action) => {
  switch (action.type) {
    case IS_ADMIN:
      // console.log(state,action)
      return action.payload;
    default:
      return state;
  }
};

export default AdminReducer;
