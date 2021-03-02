const INITIAL_STATE = {
  username: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
