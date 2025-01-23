import { FooterLogo } from "@/assets";
import { Img } from "@/components/common";

const Footer = () => {
    return (
        <div className="bg-primary text-white py-10 text-center flex flex-col items-center gap-5">
            <Img src={FooterLogo} alt="Footer Logo" className="h-20"/>
            <p>{(new Date()).getFullYear()}, All rights reserved.</p>
        </div>
    );
};

export default Footer;