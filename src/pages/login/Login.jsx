import { useContext, useState } from 'react'
import './login.scss'
import { login } from "../../Context/authContext/apiCall"
import { AuthContext } from "../../Context/authContext/authContext"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handellogin = (e) => {
        e.preventDefault()
        login({ email, password }, dispatch)
        navigate("/")

    }
    return (

        <div className='login'>
            <div className='top'>
                <div className='wrapper'>
                    <img src="https://i.ibb.co/XW2vnBh/Netflix-logo.png" alt="" className="logo" />

                </div>
            </div>
            <div className="container">

                <form>
                    <h1>Sing In</h1>
                    <input type="email" placeholder="Email or Phone number" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button className="loginButton" onClick={handellogin}>Sing In </button>
                    <span>New To Netflix ? <b>Sing up now.</b></span>
                    <small>
                        this page  is protected by Google reCAPTCHA to ensure you' re  not a bot. <b>Learn more</b>.
                    </small>


                </form>


            </div>



        </div>
    )
}

export default Login