/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
            src={imageSrc}
            className={className}
            style={{
                filter: imageSrc === src ? "none" : "blur(5px)",
            }}
        />
    );
};
export default Img;