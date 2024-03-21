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