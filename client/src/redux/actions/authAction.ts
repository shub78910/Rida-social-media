import { postDataAPI } from "../../utils/fetchData";
import valid from "../../utils/valid";
import { GLOBALTYPES } from "./globalTypes";

export const register = (data) => async (dispatch) => {
  const check = valid(data);
  if (check.errLength > 0)
    return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });

  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI("register", data);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    localStorage.setItem("firstLogin", "true");

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res,
      },
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response,
      },
    });
  }
};

export const login = (data: object) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI("login", data);

    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    localStorage.setItem("firstLogin", "true");

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res,
      },
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response,
      },
    });
  }
};

export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem("firstLogin");
  if (firstLogin) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    try {
      const res = await postDataAPI("refresh_token");
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          token: res.access_token,
          user: res.user,
        },
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response,
        },
      });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("firstLogin");
    await postDataAPI("logout");
    window.location.href = "/";
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response,
      },
    });
  }
};
