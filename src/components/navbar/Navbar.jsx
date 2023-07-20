import { useContext, useEffect, useState } from "react"
import "./navbar.scss"
import { Search, KeyboardArrowDown } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/authContext/authContext"
import { logout } from "../../Context/authContext/authAction"
import axios from "axios"

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [userE, setUserE] = useState("")
    const navigate = useNavigate()

    const id = user._id
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`/users/find/${id}`, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setUserE(res.data)


            } catch (error) {
                console.log(error)
            }
        }
        getUser()

    }, [])
    console.log(userE)
    const handleButtonClick = () => {
        navigate('/edit', { state: { userE } });
    };

    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
    const { dispatch } = useContext(AuthContext)


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">

                <div className="left">
                    <img src="https://i.ibb.co/XW2vnBh/Netflix-logo.png" alt="netflex" />
                    <Link to="/" className="link">
                        <span>Home Page</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="navbarLinkmain">Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="navbarLinkmain">Movies</span>
                    </Link>

                    <span>New and Popular</span>
                    <span>My List</span>
                </div>


                <div className="right">
                    <Search className="icon" />
                    <input type="text" className="inputSerch" />
                    <div onClick={handleButtonClick} > <span style={{ marginRight: "10px", cursor: "pointer" }}>{userE.username}</span></div>
                    {/* <NotificationsNone className="icon" /> */}
                    <img src={userE.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />



                    <div className="profile">
                        <KeyboardArrowDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout </span>
                        </div>
                    </div>


                </div>
            </div>





        </div >
    )
}

export default Navbar