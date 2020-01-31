const adminLogin = (adminData) => dispatch => {
    dispatch({
        type: "ADMIN_LOGIN_START"
    });
    fetch("/api/v1/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminData)
        }).then(res => res.json())
        .then(admin => dispatch({
            type: "ADMIN_LOGIN_SUCCESS",
            payload: admin
        }))
}

module.exports = {
    adminLogin
};