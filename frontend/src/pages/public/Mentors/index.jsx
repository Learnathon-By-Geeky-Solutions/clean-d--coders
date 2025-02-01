import { CardsMentor, FilterMentors, FullScreenLoading } from "@/components";
import { useTitle } from "@/hooks";
import { useMentorStore } from "@/store";
import { useEffect, useState } from "react";

const Mentors = () => {
    useTitle("Mentors");
    const {setMentors, isLoading: mentorsLoading}=useMentorStore()
    const [open, setOpen] = useState(false)
    useEffect(()=> {
            setMentors()
    },[setMentors])
    if(mentorsLoading) return <div className='flex-1 relative flex'>
        <FullScreenLoading />
    </div> 
    return (
        <div className='flex-1 relative'>
            <FilterMentors open={open} setOpen={setOpen}/>
            <CardsMentor setOpen={setOpen}/>
        </div>
    );
};

export default Mentors;