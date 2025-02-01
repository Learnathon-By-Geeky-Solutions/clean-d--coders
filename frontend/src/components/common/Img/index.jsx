
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Img = ({src, lowSrc = "", className, alt}) => {
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
            alt={alt}
            src={imageSrc}
            className={className}
            draggable={false}
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
    alt: PropTypes.string.isRequired,
};

export default Img;