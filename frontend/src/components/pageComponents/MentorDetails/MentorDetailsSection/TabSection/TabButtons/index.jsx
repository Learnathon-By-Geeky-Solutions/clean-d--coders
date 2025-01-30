import { Button } from "@/components/ui";
import PropTypes from "prop-types";

const TabButtons = ({ setTab, tab }) => {
  return (
    <div className="flex overflow-x-auto justify-center md:justify-start items-center gap-5">
      <Button variant={tab === "overview" ? "default" : "outline"} onClick={() => setTab("overview")}>Overview</Button>
      <Button variant={tab === "reviews" ? "default" : "outline"} onClick={() => setTab("reviews")}>Reviews</Button>
    </div>
  );
};

TabButtons.propTypes = {
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};

export default TabButtons;
