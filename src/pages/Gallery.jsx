
import ModalImage from "react-modal-image";

export default function Gallery(props) {

    let imgMap = props.imgSet.map((item,index) => {
        return(
            <ModalImage
            key={index}
            className="small-image"
            small={item}
            large={item}
            alt={"Image " + (index + 1)}
        />
        )
    })

    return (
        <>
        <br />
        <br />
        <h1 className="title">La Galería De Trabajos Realizados</h1>
        <hr />
        <br />
        <div className="the-gallery">
            <br />
            {imgMap}
        </div>
        <br />
        <div className='site-gallery'>
                            <button className='header-button' onClick={props.handleHome}>View full gallery</button>
        </div>
        <br />
        </>
    )
}