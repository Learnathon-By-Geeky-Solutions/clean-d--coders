import { Button } from "@/components/ui";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { Accordion } from "@/components/ui/accordion";
import CommonAccordion from "@/components/pageComponents/Mentors/FilterMentors/CommonAccordion";
import { useState } from "react";

export const companies = [
  { label: "All", value: "all" },
  { label: "Enosis", value: "enosis" },
  { label: "Brain Station 23", value: "brain_station_23" },
  {
    label: "Selise",
    value: "selise",
  },
];
export const costs = [
  { label: "All", value: "all" },
  { label: "Paid", value: "paid" },
  { label: "Unpaid", value: "unpaid" },
];
export const tags = [
  { label: "All", value: "all" },
  { label: "React", value: "react" },
  { label: "Dotnet", value: "dotnet" },
  {
    label: "Cloud",
    value: "Cloud",
  },
];
export const universities = [
  { label: "All", value: "all" },
  { label: "University of Chittagong", value: "university_of_chittagong" },
  { label: "University of Dhaka", value: "university_of_dhaka" },
  {
    label: "IIUC",
    value: "iiuc",
  },
];
const FilterMentors = ({ open, setOpen }) => {
  const [uniList, setUniList] = useState(["all"]);
  const [uniVal, setUniVal] = useState("");
  const [companyList, setCompanyList] = useState(["all"]);
  const [companyVal, setCompanyVal] = useState("");
  const [tagList, setTagList] = useState(["all"]);
  const [tagVal, setTagVal] = useState("");
  const [costList, setCostList] = useState(["all"]);
  const [costVal, setCostVal] = useState("");
  return (
    <div
      className={`h-full absolute z-10 top-0 left-0 flex ${
        open ? "w-full" : "w-0 duration-150"
      } overflow-hidden`}
    >
      <div
        className={`h-full overflow-y-auto  transition-all duration-300 ease-in-out bg-gray-200 ${
          open ? "w-80" : "w-0"
        }`}
      >
        {/* Menu Side Bar */}
        <div className="sticky top-0 h-fit">
          <div className="w-full p-5 border-b-2 flex justify-between items-center">
            <p className="text-2xl font-medium">Filter</p>
            <Button variant="ghost" onClick={() => setOpen(!open)}>
              <X />
            </Button>
          </div>

          <Accordion
            type="multiple"
            collapsible="true"
            className="p-5 space-y-5"
          >
            <CommonAccordion
              title="Universities"
              originalList={universities}
              list={uniList}
              setList={setUniList}
              val={uniVal}
              setVal={setUniVal}
            />
            <CommonAccordion
              title="Companies"
              originalList={companies}
              list={companyList}
              setList={setCompanyList}
              val={companyVal}
              setVal={setCompanyVal}
            />
            <CommonAccordion
              title="Tags"
              originalList={tags}
              list={tagList}
              setList={setTagList}
              val={tagVal}
              setVal={setTagVal}
            />
            <CommonAccordion
              title="Cost"
              originalList={costs}
              list={costList}
              setList={setCostList}
              val={costVal}
              setVal={setCostVal}
            />
          </Accordion>
        </div>
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
