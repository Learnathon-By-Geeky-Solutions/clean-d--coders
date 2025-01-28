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
const CostAccordion = () => {
    const costs = [
        { label: "Paid", value: "paid" },
        { label: "Unpaid", value: "unpaid" }
      ];
      const [costList, setCostList] = useState([]);
      const [costVal, setCostVal] = useState("");
      const handleCostySelect = (co) => {
        if (!costList.includes(co)) setCostList((prev) => [...prev, co]);
        setCostVal("");
      };
      const handleCostyRemove = (co) => {
        let remaining = costList.filter((c) => c !== co);
        setCostList(remaining);
      };
    return <AccordionItem className="border-0" value="Cost">
    <AccordionTrigger className="text-xl hover:no-underline">
      Cost
    </AccordionTrigger>
    <AccordionContent>
      <Select className="outline-none border-0 ring-0" value={costVal} onValueChange={handleCostySelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Cost" />
        </SelectTrigger>
        <SelectContent>
          {costs.map((c) => (
            <SelectItem key={c.value} value={c.value}>
              {c.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {costList?.length > 0 && (
        <div className="pt-3 gap-1 flex flex-wrap">
          {costList.map((c) => (
            <Button size="sm" onClick={() => handleCostyRemove(c)} key={c}>
              <span className="text-xs">{getCapitalCase(c.split("_").join(" "))}</span>
              <X />
            </Button>
          ))}
        </div>
      )}
    </AccordionContent>
  </AccordionItem>
}

export default CostAccordion