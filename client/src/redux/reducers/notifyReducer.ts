import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {};

interface action {
  payload: object;
  type: string;
}

const notifyReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default notifyReducer;
