export const loginAction = (username) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOGIN',
        payload: username,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    try {
    } catch (err) {}
  };
};
