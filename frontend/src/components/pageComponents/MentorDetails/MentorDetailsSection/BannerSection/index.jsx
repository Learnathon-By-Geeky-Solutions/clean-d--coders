import { Img } from "@/components/common";
import { Button } from "@/components/ui";
import { MessageSquareCode, Mic } from "lucide-react";
import PropTypes from "prop-types";

const BannerSection = ({ image, name }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 border-b-2 md:pb-10 pb-5">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5">
        <Img
          src={image}
          className="w-1/2 md:w-1/4 rounded-2xl aspect-square object-cover object-center shadow-xl"
          alt={`Profile picture of ${name}`}
        />
        <div className="flex flex-col items-center md:justify-evenly md:items-start gap-3">
          <p className="font-bold text-2xl md:text-4xl text-primary">{name}</p>
          <p className="font-bold text-primary md:text-2xl opacity-50">
            Senior Software Engineer
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly gap-2">
        <Button className="flex items-center justify-between w-fit">
          <span>Request Session</span> <Mic />
        </Button>
        <Button variant="outline" className="flex items-center justify-between w-fit">
          <span>Give Review</span> <MessageSquareCode />
        </Button>
      </div>
    </div>
  );
};
BannerSection.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BannerSection;
