import logo from '../img/logo.webp'

export default function Header() {
    return (
        <div className="header">
            <div className='inner-head'>
                <img src={logo} alt="" />
                <h1>MONTAJES INDUMET S.L.</h1>
            </div>
            <div className='inner-head'>
                <a className='header-link'>HOME</a>
                <a className='header-link'>ABOUT</a>
                <a className='header-link'>GALLERY</a>
            </div>
        </div>
    )
}