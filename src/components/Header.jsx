import logo from '../img/logo.webp'

export default function Header({handleGallery, handleHome, handleAbout, handleContact}) {
    return (
        <div className="header">
            <div className='inner-head'>
                <img width="60px" src={logo} alt="" />&nbsp;&nbsp;&nbsp;
                <h1>MONTAJES INDUMET S.L.</h1>
            </div>
            <div className='inner-head'>
                <button className='header-link' onClick={handleHome} >Pagina de Inicio</button>
                -
                <button className='header-link' onClick={handleAbout}>Que Hacemos</button>
                -
                <button className='header-link' onClick={handleContact}>Contacto</button>
                -
                <button className='header-link' onClick={handleGallery} >Galería</button>
            </div>
        </div>
    )
}