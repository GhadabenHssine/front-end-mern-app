import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authAction";
import { toast } from "react-toastify"

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("/api/auth/login", user);
        toast.success('user Login success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch(loginSuccess(res.data))

    } catch (err) {
        dispatch(loginFailure())
        toast.error('Wrong password or username', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

};