const adminLogin = (adminData , cb) => dispatch => {
  dispatch({
    type: "ADMIN_LOGIN_START"
  });
  fetch("/api/v1/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(adminData)
  })
    .then(res => res.json())
    .then(admin =>
      dispatch({
        type: "ADMIN_LOGIN_SUCCESS",
        payload: admin
      })
    );
    cb();
};

const adminLogout = (adminData) => dispatch => {
  dispatch({
    type: "ADMIN_LOGOUT_START"
  });
  fetch("/api/v1/admin/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(adminData)
  })
    .then(res => res.json())
    .then(loggedOutAdmin =>
      dispatch({
        type: "ADMIN_LOGOUT_SUCCESS",
        payload: loggedOutAdmin
      })
    );
};

//TO DO : 
// const deleteUser = () => dispatch => {

// }



module.exports = {
  adminLogin, adminLogout
};
