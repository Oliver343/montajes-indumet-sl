import { useState } from 'react'


export default function GalleryScroll(props) {
    const [currentImg, setCurrentImg] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
      }

    function handleLeft() {
        if (currentImg === 0) {
            setCurrentImg(() => props.imgSet.length -1)
        } else {
            setCurrentImg((pre) => pre - 1)
        }
    }

    function handleRight() {
        if (currentImg === props.imgSet.length -1) {
            setCurrentImg(() =>  0 )
        } else {
            setCurrentImg((pre) => pre + 1 )
        }
    }

    window.addEventListener('resize', handleResize);

    return(
        <div className='gallery-scroll'>
            <button className='side-button left-button' onClick={handleLeft}><i className="fa-solid fa-caret-left fa-2xl"></i></button>
            <img width={width / 2} src={props.imgSet[currentImg]} alt=""/>
            <button className='side-button right-button' onClick={handleRight}><i className="fa-solid fa-caret-right fa-2xl"></i></button>
        </div>
    )
}