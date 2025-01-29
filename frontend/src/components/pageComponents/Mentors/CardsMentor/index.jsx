import BannerSection from "@/components/pageComponents/Mentors/CardsMentor/BannerSection";
import CardsSection from "@/components/pageComponents/Mentors/CardsMentor/CardsSection";
import PropTypes from "prop-types";
import { useState } from "react";

const CardsMentor = ({ setOpen }) => {
  const [sort, setSort] = useState("default");

  return (
    <div className="w-full h-full">
      <BannerSection setOpen={setOpen} setSort={setSort} sort={sort}/>
      <CardsSection />
    </div>
  );
};

CardsMentor.propTypes = {
  setOpen: PropTypes.func,
};

export default CardsMentor;
