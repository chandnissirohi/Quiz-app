const userLogIn = userData => dispatch => {
  dispatch({
    type: "USER_LOGIN_START"
  });
  fetch("/api/v1/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: user.userData
      })
    );
};

const userLogOut = userData => dispatch => {
  dispatch({
    type: "USER_LOGOUT_START"
  });
  localStorage.clear();
};

module.exports = {
  userLogIn,
  userLogOut
};
