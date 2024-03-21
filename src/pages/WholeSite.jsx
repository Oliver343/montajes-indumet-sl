import './WholeSite.css';
import Header from "../components/Header";
import PosterBoard from '../components/PosterBoard';
import Contact from '../components/Contact';
import weld from '../img/weld.webp'
import GalleryScroll from '../components/GalleryScroll';

export default function WholeSite() {
    return (
        <div className='wholesite-body'>
            <Header />
            <PosterBoard />
            <div className='site-body'>
                <div >
                    <img className='body-img' src={weld} width={600} alt=""></img>
                </div>
                <div className='body-text'>
                    Estructuras metálicas, calderería media y fina, mantenimiento industrial,
                    carpintería metálica, soldaduras especiales, cubiertas, canalones, barandillas,
                    escaleras, vallas....
                </div>
            </div>
            <div className='title'>
                <h1 className='title-text'>Trabajos Realizados</h1>
            </div>
            <div className='site-gallery'>
                <GalleryScroll />
            </div>
            <br />
            <br />
            <br />
            <br />
            <Contact />
        </div>
    )
}