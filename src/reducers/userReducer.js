const INITIAL_STATE = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  // action dapat menerima 2 property -> type dan payload --> action.type & action.payload
  console.log("Data dari function action ->", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        INITIAL_STATE,
      };

    default:
      return state;
  }
};
