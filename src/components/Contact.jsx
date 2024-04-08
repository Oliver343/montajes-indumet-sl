import logo from '../img/logo.webp'

export default function Contact({smallSet}) {
    return(
        <div className={smallSet ? "contact-mobile" : "contact"}>
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
            <div>
                <iframe title="mapFrameItem" width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=Landaluc%C3%ADa%20Vitoria-Gasteiz+(montajes-indumet-sl)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ef35c703e5ba04327757352479d7c6a69f16daa1'></script>
            </div>

            <div><img src={logo} alt=""/></div>
        </div>
    )
}