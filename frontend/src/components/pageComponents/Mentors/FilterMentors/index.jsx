import { Button } from "@/components/ui";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { Accordion } from "@/components/ui/accordion";
import CommonAccordion from "@/components/pageComponents/Mentors/FilterMentors/CommonAccordion";
import { useState } from "react";
import { useMentorStore } from "@/store";

const FilterMentors = ({ open, setOpen }) => {
  const {filterData, setFilteredMentor, setUnFillteredMentor} = useMentorStore()
  const [uniList, setUniList] = useState(["all"]);
  const [uniVal, setUniVal] = useState("");
  const [companyList, setCompanyList] = useState(["all"]);
  const [companyVal, setCompanyVal] = useState("");
  const [tagList, setTagList] = useState(["all"]);
  const [tagVal, setTagVal] = useState("");
  const [costList, setCostList] = useState(["all"]);
  const [costVal, setCostVal] = useState("");
  const handleFilterApply = () => {
    setFilteredMentor({
      companies: companyList,
      universities: uniList,
      tags: tagList,
      costs: costList
    })
  }
  const handleFilterReset = () => {
    setUnFillteredMentor()
    setUniList(["all"])
    setCompanyList(["all"])
    setTagList(["all"])
    setCostList(["all"])
  }
  return (
    <div
      className={`h-full absolute z-10 top-0 left-0 flex ${
        open ? "w-full" : "w-0 duration-150"
      } overflow-hidden`}
    >
      <div
        className={`h-full pb-5 overflow-y-auto transition-all duration-300 ease-in-out bg-gray-200 ${
          open ? "w-80" : "w-0"
        }`}
      >
        {/* Menu Side Bar */}
        <div className=" h-fit">
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
              originalList={filterData.universities}
              list={uniList}
              setList={setUniList}
              val={uniVal}
              setVal={setUniVal}
            />
            <CommonAccordion
              title="Companies"
              originalList={filterData.companies}
              list={companyList}
              setList={setCompanyList}
              val={companyVal}
              setVal={setCompanyVal}
            />
            <CommonAccordion
              title="Tags"
              originalList={filterData.tags}
              list={tagList}
              setList={setTagList}
              val={tagVal}
              setVal={setTagVal}
            />
            <CommonAccordion
              title="Cost"
              originalList={filterData.costs}
              list={costList}
              setList={setCostList}
              val={costVal}
              setVal={setCostVal}
            />
          </Accordion>
          <div className="w-full px-5 flex gap-5 items-center">
          <Button className="flex-1" onClick={handleFilterApply}>Apply</Button>
          <Button variant="destructive" className="flex-1" onClick={handleFilterReset}>Reset</Button>
          </div>
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
