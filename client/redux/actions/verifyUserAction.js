const verifyUser = () => dispatch => {
    fetch("/api/v1/admin/me" , {
        method: "GET",
        headers: {
            authorization: localStorage.token,
            'content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(admin => 
        (!admin) ?
            fetch("/api/v1/user/me" , {
                method: "GET",
                headers: {
                    authorization: localStorage.token,
                    'content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(user => dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: user
            })) :
            dispatch({
                type: 'ADMIN_LOGIN_SUCCESS',
                payload: admin
            })
        )
}

module.exports = {verifyUser}