import { ArrowBackIos } from '@mui/icons-material'
import './watch.scss'
import { useLocation, Link } from 'react-router-dom'
import YouTube from 'react-youtube';

const Watch = () => {
    const location = useLocation();
    // console.log(location.state.movie.title)
    const trailerM = location.state.movie.trailer;


    const opts = {
        height: '590',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();

    }
    return (
        <div className='watch'>
            <Link to="/">
                <div className='back '>
                    <ArrowBackIos />
                    Home
                </div>
            </Link>
            <YouTube videoId={trailerM} opts={opts} onReady={onReady} />;



        </div>
    )
}

export default Watch