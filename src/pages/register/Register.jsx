import { useNavigate } from 'react-router-dom';
import './register.scss'
import { useRef, useState } from "react"
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const emailRef = useRef()

    const navigate = useNavigate()
    const handelStart = () => {
        setEmail(emailRef.current.value)
    }
    const handelFinech = async (e) => {
        e.preventDefault()
        try {

            await axios.post("auth/register", { email, username, password })
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    const handelSingIn = () => {
        navigate("/login")
    }
    console.log(username);
    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img src="https://i.ibb.co/XW2vnBh/Netflix-logo.png" alt="" className="logo" />
                    <button className="loginButton" onClick={handelSingIn} >Sing In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies,TV shows , and more.</h1>

                <h2>Watch anywhere . Cancel anytime.</h2>
                <p>Ready to watch ? Enter your Email to create or restart your membership</p>

                {!email ? (
                    <div className='input'>
                        <input type='email ' placeholder='email address' ref={emailRef} />
                        <button className="registerButton" onClick={handelStart}>Get started </button>
                    </div>
                ) : (
                    <form className='input'>
                        <input type='password ' placeholder='Password' onChange={e => setPassword(e.target.value)} />

                        <input type='text' placeholder='username' onChange={e => setUsername(e.target.value)} />
                        <button className="registerButton" onClick={handelFinech}>Start </button>
                    </form>
                )}


            </div>

        </div>
    )
}

export default Register