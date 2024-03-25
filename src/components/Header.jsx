import logo from '../img/logo.webp'

export default function Header({handleGallery, handleHome}) {
    return (
        <div className="header">
            <div className='inner-head'>
                <img src={logo} alt="" />
                <h1>MONTAJES INDUMET S.L.</h1>
            </div>
            <div className='inner-head'>
                <button className='header-link' onClick={handleHome} >HOME</button>
                <button className='header-link'>ABOUT</button>
                <button className='header-link' onClick={handleGallery} >GALLERY</button>
            </div>
        </div>
    )
}