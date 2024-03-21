
import ModalImage from "react-modal-image";

export default function Gallery(props) {

    return (
        <>
        <div className="the-gallery">
            <ModalImage
                className="small-image"
                small={props.imgSet[0]}
                large={props.imgSet[0]}
                alt="Image 1"
            />
            <ModalImage
                className="small-image"
                small={props.imgSet[1]}
                large={props.imgSet[1]}
                alt="Image 1"
            />
            <ModalImage
                className="small-image"
                small={props.imgSet[2]}
                large={props.imgSet[2]}
                alt="Image 1"
            />
            <ModalImage
                className="small-image"
                small={props.imgSet[3]}
                large={props.imgSet[3]}
                alt="Image 1"
            />
        </div>
        </>
    )
}