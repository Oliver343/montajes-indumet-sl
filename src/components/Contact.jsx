import logo from '../img/logo.webp'

export default function Contact() {
    return(
        <div className="contact">
            <div className="contact-inner">
                <i className="fa-solid fa-location-dot"></i> - C/ Landalucía 13, Vitoria-Gasteiz
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pol. Ind. Júndiz
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01015
                <br />
                <br />
                <i className="fa-solid fa-envelope"></i> - indumet.sl@hotmail.com
                <br />
                <br />
                <i className="fa-solid fa-phone"></i> - 945 29 08 51
            </div>

            <div><img src={logo} /></div>
        </div>
    )
}