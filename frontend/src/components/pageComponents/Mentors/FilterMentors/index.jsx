import { Button } from "@/components/ui";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import {
  Accordion
} from "@/components/ui/accordion";
import UniversitiesAccordion from "@/components/pageComponents/Mentors/FilterMentors/UniversityAccordion";
import CompaniesAccordion from "@/components/pageComponents/Mentors/FilterMentors/Companies";
import TagsAccordion from "@/components/pageComponents/Mentors/FilterMentors/Tags";
import CostAccordion from "@/components/pageComponents/Mentors/FilterMentors/Cost";

const FilterMentors = ({ open, setOpen }) => {
  
  return (
    <div
      className={`h-full absolute z-10 top-0 left-0 flex ${
        open ? "w-full" : "w-0 duration-150"
      } overflow-hidden`}
    >
      <div
        className={`h-full overflow-y-auto bg-white transition-all duration-300 ease-in-out ${
          open ? "w-80" : "w-0"
        }`}
      >
        {/* Menu Side Bar */}
        <div className="w-full p-5 border-b-2 flex justify-between items-center">
          <p className="text-2xl font-medium">Filter</p>
          <Button variant="ghost" onClick={() => setOpen(!open)}>
            <X />
          </Button>
        </div>

        <Accordion type="multiple" collapsible="true" className="p-5 space-y-5">
          <UniversitiesAccordion/>
          <CompaniesAccordion/>
          <TagsAccordion />
          <CostAccordion />
        </Accordion>
      </div>
      {open && (
        <button
          onClick={() => setOpen(!open)}
          className={`h-full flex-1 bg-black bg-opacity-80`}
        ></button>
      )}
    </div>
  );
};
FilterMentors.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default FilterMentors;


