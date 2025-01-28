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
const TagsAccordion = () => {
    const tags = [
        { label: "React", value: "react" },
        { label: "Dotnet", value: "dotnet" },
        {
          label: "Cloud",
          value: "Cloud",
        },
      ];
      const [tagList, setTagList] = useState([]);
      const [tagVal, setTagVal] = useState("");
      const handleTagSelect = (tag) => {
        if (!tagList.includes(tag)) setTagList((prev) => [...prev, tag]);
        setTagVal("");
      };
      const handleTagRemove = (tag) => {
        let remaining = tagList.filter((t) => t !== tag);
        setTagList(remaining);
      };
    return <AccordionItem className="border-0" value="Tags">
    <AccordionTrigger className="text-xl hover:no-underline">
      Tags
    </AccordionTrigger>
    <AccordionContent>
      <Select className="outline-none border-0 ring-0" value={tagVal} onValueChange={handleTagSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Tags" />
        </SelectTrigger>
        <SelectContent>
          {tags.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {tagList?.length > 0 && (
        <div className="pt-3 gap-1 flex flex-wrap">
          {tagList.map((t) => (
            <Button size="sm" onClick={() => handleTagRemove(t)} key={t}>
              <span className="text-xs">{getCapitalCase(t.split("_").join(" "))}</span>
              <X />
            </Button>
          ))}
        </div>
      )}
    </AccordionContent>
  </AccordionItem>
}

export default TagsAccordion