import { Button } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import PropTypes from "prop-types";

const BannerSection = ({ sort, setOpen, setSort }) => {
  return (
    <>
      <div className="w-full h-[100px] bg-black bg-primary flex justify-center items-center">
        <p className="text-primary-foreground text-4xl">All Mentors</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 items-stretch md:items-center p-5">
        <Button
          className="flex items-center justify-between"
          onClick={() => setOpen(true)}
        >
          <span>Filter</span>
          <Filter />
        </Button>
        <div className="flex items-center justify-end">
          <p className="text-sm">Sort By</p>
          <Select value={sort} className="" onValueChange={setSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={`Default`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cost_desc">
                <span>Cost Descending</span>
              </SelectItem>
              <SelectItem value="cost_asc">
                <span>Cost Ascending</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
BannerSection.propTypes = {
  sort: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default BannerSection;
