const initialState = {
  token: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, token: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
