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
  import { useState } from "react";
  import { getCapitalCase } from "@/utils";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
const UniversitiesAccordion = () => {
    const universities = [
        { label: "University of Chittagong", value: "university_of_chittagong" },
        { label: "University of Dhaka", value: "university_of_dhaka" },
        {
          label: "IIUC",
          value: "iiuc",
        },
      ];
      const [uniList, setUniList] = useState([]);
      const [uniVal, setUniVal] = useState("");
      const handleUniSelect = (uni) => {
        if (!uniList.includes(uni)) setUniList((prev) => [...prev, uni]);
        setUniVal("");
      };
      const handleUniRemove = (uni) => {
        let remaining = uniList.filter((u) => u !== uni);
        setUniList(remaining);
      };
    return <AccordionItem className="border-0" value="Universities">
    <AccordionTrigger className="text-xl hover:no-underline">
      Universities
    </AccordionTrigger>
    <AccordionContent>
      <Select className="outline-none border-0 ring-0" value={uniVal} onValueChange={handleUniSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Universities" />
        </SelectTrigger>
        <SelectContent>
          {universities.map((u) => (
            <SelectItem key={u.value} value={u.value}>
              {u.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {uniList?.length > 0 && (
        <div className="pt-3 gap-1 flex flex-wrap">
          {uniList.map((u) => (
            <Button size="sm" onClick={() => handleUniRemove(u)} key={u}>
              <span className="text-xs">{getCapitalCase(u.split("_").join(" "))}</span>
              <X />
            </Button>
          ))}
        </div>
      )}
    </AccordionContent>
  </AccordionItem>
}

export default UniversitiesAccordion