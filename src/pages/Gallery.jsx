
import ModalImage from "react-modal-image";

export default function Gallery(props) {

    let imgMap = props.imgSet.map((item) => {
        return(
            <ModalImage
            className="small-image"
            small={item}
            large={item}
            alt="Image"
        />
        )
    })

    return (
        <>
        <div className="the-gallery">
            {imgMap}
        </div>
        </>
    )
}