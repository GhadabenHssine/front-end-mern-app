import React, { useContext, useState } from 'react'
import axios from "axios"
import { Publish } from "@mui/icons-material"
import "./edit.css"
import Navbar from '../navbar/Navbar'
import { editUser } from '../../Context/userContext/apiCall'
import { UsersContext } from '../../Context/userContext/usersContext.js';
import { useLocation } from 'react-router-dom'

const Edit = () => {
    const location = useLocation()
    const user = location.state.userE
    console.log(user)
    const [file, setFile] = useState(null);
    const [profilePic, setUrl] = useState(user.profilePic)
    const [username, setUserName] = useState(user.username)
    console.log(profilePic)

    // const [password, setPassword] = useState("")
    const [email, setEmail] = useState(user.email)

    const { dispatch } = useContext(UsersContext)
    const uploadImage = async (e) => {
        e.preventDefault()
        const form = new FormData();
        form.append("file", file)
        form.append("upload_preset", "ghadabenhssine");
        await axios.post('https://api.cloudinary.com/v1_1/ecomerce-site-web/upload', form).then((res) => setUrl(res.data.secure_url))
    }

    const userEdit = { username, email, profilePic }
    const idD = user._id
    console.log(idD)
    console.log(userEdit)

    const handelSubmit = (e) => {
        e.preventDefault()
        editUser(idD, userEdit, dispatch)

    }
    return (
        <div className='edit'>
            <Navbar />
            <div className='editProfil'>


                <div className='userUpdate'>

                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className="userUpdateItem">
                                <label>User Name</label>
                                <input type='text'
                                    className='userUpdateInput' name="username" value={username} onChange={e => setUserName(e.target.value)} />
                            </div>


                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type='text'
                                    className='userUpdateInput' name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* <div className="userUpdateItem">
                        <label>Password</label>
                        <input type='password'
                            className='userUpdateInput' name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div> */}


                            <button className="userUpdateButton" onClick={handelSubmit}>Edit</button>
                        </div>


                        <div className='userUpdateRight'>
                            <div className='userUpdateUplad'>
                                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                    alt="" className='userUpdateImg' />

                                <label htmlFor='file'>
                                    <Publish
                                        className="userUpdateIcon" />
                                </label>
                                <input type='file' id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />


                                <button className="userUpdateButton" onClick={uploadImage}>Upload</button>
                            </div>


                        </div>




                    </form>



                </div>


            </div>
        </div>
    )
}

export default Edit