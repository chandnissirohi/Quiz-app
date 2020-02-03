const userSignUp = (userData , cb) => dispatch => {
  dispatch({
    type: "USER_CREATE_START"
  });
  fetch("/api/v1/user/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: "USER_CREATE_SUCCESS",
        payload: user.userData
      })
    );
    cb();
};

const userLogIn = userData => dispatch => {
  dispatch({
    type: "USER_LOGIN_START"
  });
  fetch("/api/v1/user/login", {
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
  userLogOut,
  userSignUp
};
