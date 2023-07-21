
import List from "../../components/list/List"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = ({ type }) => {

    const [list, setList] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setList(res.data)
                // console.log(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        getRandomLists()

    }, [type, genre])

    return (
        <div className="home">

            <Navbar />
            <Featured type={type} setGenre={setGenre} />

            {list.map((list) => (
                <List list={list} />

            ))}







        </div>
    )
}

export default Home