import './WholeSite.css';
import Header from "../components/Header";
import PosterBoard from '../components/PosterBoard';
import Contact from '../components/Contact';
import picture from '../img/weld.webp'

export default function WholeSite() {
    return (
        <div className='wholesite-body'>
            <Header />
            <PosterBoard />
            <div className='site-body'>
                <div >
                    <img className='body-img' src={picture} width={600}></img>
                </div>
                <div className='body-text'>
                    Estructuras metálicas, calderería media y fina, mantenimiento industrial,
                    carpintería metálica, soldaduras especiales, cubiertas, canalones, barandillas,
                    escaleras, vallas....
                </div>
            </div>

            <Contact />
        </div>
    )
}