//get user
export const getUsersStart = () => ({
    type: "GET_USERS_Start"
})
export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users
})
export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE"
})
//delete
export const deleteUserStart = () => ({
    type: "DELETE_USER_Start"
})
export const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id
})
export const deleteUserFailure = () => ({
    type: "DELETE_USER_FAILURE"
})
//create user

export const creteuserStart = () => ({
    type: "CREATE_USER_Start"
})
export const creteuserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user
})
export const creteuserFailure = () => ({
    type: "CREATE_USER_FAILURE"
})

//edit user

export const editUserStart = () => ({
    type: "EDIT_USER_Start"
})
export const editUserSuccess = (id, user) => ({
    type: "EDIT_USER_SUCCESS",
    payload: user
})
export const editUserFailure = () => ({
    type: "EDIT_USER_FAILURE"
})
