import {
    creteuserFailure, creteuserStart, creteuserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess,
    editUserFailure, editUserStart, editUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess
} from "./usersAction"
import axios from "axios"
// get
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart())
    try {

        const res = await axios.get("https://mernbackend-nbdj.onrender.com/api/users", {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(getUsersSuccess(res.data))
    } catch (error) {
        dispatch(getUsersFailure())
    }

}
//create
export const createUser = async (user, dispatch) => {
    dispatch(creteuserStart())
    try {

        const res = await axios.post("https://mernbackend-nbdj.onrender.com/api/users", user, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(creteuserSuccess(res.data))
    } catch (error) {
        dispatch(creteuserFailure())
    }

}


export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart())
    try {

        await axios.delete("https://mernbackend-nbdj.onrender.com/api/users/" + id, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(deleteUserSuccess(id))

    } catch (error) {
        dispatch(deleteUserFailure())
    }

}

export const editUser = async (id, user, dispatch) => {
    dispatch(editUserStart())
    try {
        const res = axios.put(`https://mernbackend-nbdj.onrender.com/api/users/${id}`, user, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }

        });
        dispatch(editUserSuccess(id, res.data))
    } catch (error) {
        dispatch(editUserFailure())
    }

}