import logo from '../img/logo.webp'

export default function Header({smallSet, handleGallery, handleHome, handleAbout, handleContact}) {
    return (
        <div className="header" >
            <div className='inner-head'>
                {smallSet ? "" : <img width="60px" src={logo} alt="" />} &nbsp;&nbsp;&nbsp;
                
                <h1>MONTAJES INDUMET S.L.</h1>
            </div>
            {smallSet ? "" :
                        <div className='inner-head'>
                        <button className='header-link' onClick={handleHome} >Pagina de Inicio</button>
                        {smallSet ? <br/> : "-"}
                        <button className='header-link' onClick={handleAbout}>Que Hacemos</button>
                        {smallSet ? <br/> : "-"}
                        <button className='header-link' onClick={handleContact}>Contacto</button>
                        {smallSet ? <br/> : "-"}
                        <button className='header-link' onClick={handleGallery} >Galería</button>
                    </div>
            }

        </div>
    )
}