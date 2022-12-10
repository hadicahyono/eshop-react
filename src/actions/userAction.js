export const loginAction = (data) => {
  console.log("data dari Login.jsx", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
