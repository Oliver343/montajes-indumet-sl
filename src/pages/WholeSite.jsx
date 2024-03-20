import './WholeSite.css';
import Header from "../components/Header";
import PosterBoard from '../components/PosterBoard';

export default function WholeSite() {
    return (
        <div className='wholesite-body'>
            <Header />
            <PosterBoard />
        </div>
    )
}