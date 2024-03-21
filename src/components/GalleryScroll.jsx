import { useState } from 'react'
import img1 from '../img/img (100).webp'
import img2 from '../img/img (101).webp'
import img3 from '../img/img (102).webp'
import img4 from '../img/img (103).webp'
import img5 from '../img/img (104).webp'
import img6 from '../img/img (105).webp'
import img7 from '../img/img (106).webp'
import img8 from '../img/img (107).webp'
import img9 from '../img/img (200).webp'
import img10 from '../img/img (201).webp'
import img11 from '../img/img (202).webp'
import img12 from '../img/img (203).webp'
import img13 from '../img/img (204).webp'
import img14 from '../img/img (205).webp'
import img15 from '../img/img (206).webp'
import img16 from '../img/img (207).webp'
import img17 from '../img/img (300).webp'
import img18 from '../img/img (301).webp'
import img19 from '../img/img (302).webp'
import img20 from '../img/img (303).webp'

export default function GalleryScroll() {
    const imgSet = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]
    const [currentImg, setCurrentImg] = useState(0)

    function handleLeft() {
        if (currentImg === 0) {
            setCurrentImg(() => imgSet.length -1)
        } else {
            setCurrentImg((pre) => pre - 1)
        }
    }

    function handleRight() {
        if (currentImg === imgSet.length -1) {
            setCurrentImg(() =>  0 )
        } else {
            setCurrentImg((pre) => pre + 1 )
        }
    }

    return(
        <div className='gallery-scroll'>
            <button className='sideButton' onClick={handleLeft}><i className="fa-solid fa-caret-left fa-2xl"></i></button>
            <img width={"50%"} src={imgSet[currentImg]} alt=""/>
            <button className='sideButton' onClick={handleRight}><i className="fa-solid fa-caret-right fa-2xl"></i></button>
        </div>
    )
}