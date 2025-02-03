import Overview from "@/components/pageComponents/MentorDetails/MentorDetailsSection/TabSection/Overview";
import Reviews from "@/components/pageComponents/MentorDetails/MentorDetailsSection/TabSection/Reviews";
import { useState } from "react";
import PropTypes from "prop-types";
import { TabButtons } from "@/components/common";

const TabSection = ({ data }) => {
  const [tab, setTab] = useState("overview");
  return (
    <div className="py-5 w-full">
      <TabButtons tab={tab} setTab={setTab} tabList={["overview", "reviews"]} />
      {tab === "overview" && <Overview data={data} />}
      {tab === "reviews" && <Reviews />}
    </div>
  );
};
TabSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TabSection;
