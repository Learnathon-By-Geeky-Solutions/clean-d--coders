
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Img = ({src, lowSrc = "", className}) => {
    const [imageSrc, setImageSrc] = useState(lowSrc || src);
    useEffect(()=> {
        if(!lowSrc) return;
        const image = new Image();
        image.src = src;
        image.onload = () => {
            setImageSrc(src);
        };
    }, [src, lowSrc]);
    return (
        <img
            alt=""
            src={imageSrc}
            className={className}
            style={{
                filter: imageSrc === src ? "none" : "blur(5px)",
            }}
        />
    );
}
Img.propTypes = {
    src: PropTypes.string.isRequired,
    lowSrc: PropTypes.string,
    className: PropTypes.string,
};

export default Img;