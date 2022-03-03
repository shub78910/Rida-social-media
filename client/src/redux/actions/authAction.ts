import { postDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI("login", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
