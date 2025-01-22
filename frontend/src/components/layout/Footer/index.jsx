
const Footer = () => {
    return (
        <div className="bg-primary text-white py-10 text-center flex flex-col items-center gap-5">
            <p className="text-4xl font-bold text-orange-200">MENTOR CONNECT</p>
            <p>{(new Date()).getFullYear()}, All rights reserved.</p>
        </div>
    );
};

export default Footer;