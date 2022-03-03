import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {};

interface action {
  payload: object;
  type: string;
}

const authReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
