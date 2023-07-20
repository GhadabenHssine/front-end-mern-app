import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
const List = ({ list }) => {


    const letRef = useRef()
    const [slideNumber, setSlideNumbre] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230)
    const handelClick = (direction) => {
        setIsMoved(true)
        let distance = letRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumbre(slideNumber - 1)
            letRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumbre(slideNumber + 1)
            letRef.current.style.transform = `translateX(${-230 + distance}px)`
        }

    }
    console.log(list)
    return (
        <div className='list'>
            <span className='listTitle'>{list.title}</span>
            <div className='wrapper'>

                <ArrowBackIos className="sliderArrow left" onClick={() => handelClick("left")} style={{ display: !isMoved && "none" }} />
                <div className='container' ref={letRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item} />
                    )

                    )}


                </div>


                <ArrowForwardIos className="sliderArrow right" onClick={() => handelClick("right")} />

            </div>

        </div>
    )
}

export default List