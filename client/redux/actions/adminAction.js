const adminLogin = (adminData, cb, notAdmin) => dispatch => {
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
    .then(admin => {
      if (admin.error) {
        notAdmin();
      } else {
        localStorage.setItem("token", admin.token);
        dispatch({
          type: "ADMIN_LOGIN_SUCCESS",
          payload: admin
        });
        cb();
      }
    });
};

const adminLogout = () => dispatch => {
  localStorage.clear();
  dispatch({
    type: "ADMIN_LOGOUT"
  });
};

//TO DO :
// const deleteUser = () => dispatch => {

// }

module.exports = {
  adminLogin,
  adminLogout
};
