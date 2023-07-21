import { Add, PlayArrow, ThumbUpOutlined, ThumbDownAltOutlined } from '@mui/icons-material'
import './listItem.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ListItemText } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const ListItem = ({ item, index }) => {
    const navigate = useNavigate();
    const [isHovred, setIsHovred] = useState(false)
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/api/movies/find/" + item, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });

                setMovie(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [item])

    const handleButtonClick = () => {
        navigate('/watch', { state: { movie } });
    };
    return (
        <div onClick={handleButtonClick}>
            <div className='listItem' onMouseEnter={() => setIsHovred(true)}
                onMouseLeave={() => setIsHovred(false)}
                style={{ left: isHovred && index * 225 - 50 + index * 2.5 }}>

                <img src={movie.img} alt="" />
                {isHovred && (
                    <div>

                        <video src={movie.trailler} autoPlay={true} loop />
                        <div className='itemInfo'>
                            <div className='icons'>

                                <PlayArrow className="icon" />
                                <Add className="icon" />

                                <ThumbUpOutlined className="icon" />

                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">{movie.limit}</span>
                                <span>{movie.year}</span>

                            </div>
                            <div className='description'>
                                {movie.title}
                            </div>
                            <div className='description'>
                                {movie.desc}
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ListItem