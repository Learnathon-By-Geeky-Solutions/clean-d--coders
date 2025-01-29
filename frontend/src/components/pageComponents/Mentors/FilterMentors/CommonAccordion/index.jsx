import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { getCapitalCase } from "@/utils";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import PropTypes from "prop-types"
const CommonAccordion = ({list, setList, val, setVal, originalList, title}) => {
      const handleSelect = (item) => {
        if(item === "all") setList(["all"])
        else if (!list.includes(item)) {
            const selected = list.filter(x => x !== "all");
            setList(selected.length === originalList.length-2 ?["all"]:[...selected, item])
        }
        setVal("");
      };
      const handleRemove = (item) => {
        let remaining = list.filter((x) => x !== item);
        setList(remaining.length > 0 ? remaining : ["all"]);
      };
    return <AccordionItem className="border-0" value={title}>
    <AccordionTrigger className="text-xl hover:no-underline">
      {title}
    </AccordionTrigger>
    <AccordionContent>
      <Select className="outline-none border-0 ring-0" value={val} onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select ${title}`} />
        </SelectTrigger>
        <SelectContent>
          {originalList.map((x) => !list.includes(x.value) && (
            <SelectItem key={x.value} value={x.value}>
              {x.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {list?.length > 0 && (
        <div className="pt-3 gap-1 flex flex-wrap">
          {list.map((x) => (
            <Button variant={x !== "all" ? "default" : "success"} size="sm" onClick={() =>x !== "all" && handleRemove(x)} key={x}>
              <span className="text-xs">{getCapitalCase(x.split("_").join(" "))}</span>
              {
                x !== "all" && <X />
              }
            </Button>
          ))}
        </div>
      )}
    </AccordionContent>
  </AccordionItem>
}
CommonAccordion.propTypes = {
    list: PropTypes.array.isRequired,
    setList: PropTypes.func.isRequired,
    val: PropTypes.string.isRequired,
    setVal: PropTypes.func.isRequired,
    originalList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };
export default CommonAccordion