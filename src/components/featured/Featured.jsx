import React, { useEffect, useState } from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({})
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/api/movies/random?type=${type}`, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                }
                )
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent()
    }, [type])
    return (


        <div className='featured' >
            {
                type && (

                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}  </span>
                        <select name="genre" onChange={e => setGenre(e.target.value)}>
                            <option>Genre</option>
                            <option value="adventure">adventure</option>
                            <option value="commedy">Commedy</option>
                            <option value="action">action</option>
                            <option value="crime">crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="Horrer">Horrer</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )}

            <img src={content.img} alt="" />
            <div className='info'>
                <img src={content.imgTitle} alt="" />
                <span className='desc'>
                    {content.desc}

                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Featured