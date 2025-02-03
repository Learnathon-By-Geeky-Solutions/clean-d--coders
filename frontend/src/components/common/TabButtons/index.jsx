import { Button } from "@/components/ui";
import { getCapitalCase } from "@/utils";
import PropTypes from "prop-types";

const TabButtons = ({ setTab, tab, tabList }) => {
  return (
    <div className="flex overflow-x-auto justify-center md:justify-start items-center gap-5">
      {tabList.map((t) => (
        <Button
          variant={tab === t ? "default" : "outline"}
          onClick={() => setTab(t)}
          key={t}
        >
          {getCapitalCase(t)}
        </Button>
      ))}
    </div>
  );
};

TabButtons.propTypes = {
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default TabButtons;
