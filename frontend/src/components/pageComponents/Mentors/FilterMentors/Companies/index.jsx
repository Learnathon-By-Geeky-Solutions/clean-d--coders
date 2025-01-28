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
const CompaniesAccordion = () => {
    const companies = [
        { label: "Enosis", value: "enosis" },
        { label: "Brain Station 23", value: "brain_station_23" },
        {
          label: "Selise",
          value: "selise",
        },
      ];
      const [companyList, setCompanyList] = useState([]);
      const [companyVal, setCompanyVal] = useState("");
      const handleCompanySelect = (com) => {
        if (!companyList.includes(com)) setCompanyList((prev) => [...prev, com]);
        setCompanyVal("");
      };
      const handleCompanyRemove = (com) => {
        let remaining = companyList.filter((c) => c !== com);
        setCompanyList(remaining);
      };
    return <AccordionItem className="border-0" value="Companies">
    <AccordionTrigger className="text-xl hover:no-underline">
      Companies
    </AccordionTrigger>
    <AccordionContent>
      <Select className="outline-none border-0 ring-0" value={companyVal} onValueChange={handleCompanySelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Companies" />
        </SelectTrigger>
        <SelectContent>
          {companies.map((c) => (
            <SelectItem key={c.value} value={c.value}>
              {c.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {companyList?.length > 0 && (
        <div className="pt-3 gap-1 flex flex-wrap">
          {companyList.map((c) => (
            <Button size="sm" onClick={() => handleCompanyRemove(c)} key={c}>
              <span className="text-xs">{getCapitalCase(c.split("_").join(" "))}</span>
              <X />
            </Button>
          ))}
        </div>
      )}
    </AccordionContent>
  </AccordionItem>
}

export default CompaniesAccordion