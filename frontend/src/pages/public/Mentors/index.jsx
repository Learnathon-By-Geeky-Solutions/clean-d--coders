import { CardsMentor, FilterMentors } from "@/components";
import { useTitle } from "@/hooks";
import { useState } from "react";

const Mentors = () => {
    useTitle("Mentors");
    const [open, setOpen] = useState(false)
    return (
        <div className='flex-1 relative'>
            <FilterMentors open={open} setOpen={setOpen}/>
            <CardsMentor setOpen={setOpen}/>
        </div>
    );
};

export default Mentors;