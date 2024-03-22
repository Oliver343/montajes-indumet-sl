import { useState } from 'react';
import './WholeSite.css';
import Header from "../components/Header";
import PosterBoard from '../components/PosterBoard';
import Contact from '../components/Contact';
import weld from '../img/weld.webp'
import GalleryScroll from '../components/GalleryScroll';
import Gallery from './Gallery';
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


export default function WholeSite() {
    const [galleryPage, setGalleryPage] = useState(true)
    const imgSet = [img1, img2, img5, img3, img4,  img18, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img19, img20]

    return (
        <div className='wholesite-body'>
            <Header />

            {galleryPage ? <Gallery imgSet={imgSet} /> : 
                    <>
                        <PosterBoard />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='site-body'>
                            <div >
                                <img className='body-img' src={weld} width={"100%"} alt=""></img>
                            </div>
                            <div className='body-text'>
                                <h1 className='title-text'>Quiénes Somos</h1>
                                Estructuras metálicas, calderería media y fina, mantenimiento industrial,
                                carpintería metálica, soldaduras especiales, cubiertas, canalones, barandillas,
                                escaleras, vallas....
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <div className='title'>
                            <h1 className='title-text'>Trabajos Realizados</h1>
                        </div>
                        <div className='site-gallery'>
                            <GalleryScroll imgSet={imgSet} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </>
            }


            <Contact />
        </div>
    )
}