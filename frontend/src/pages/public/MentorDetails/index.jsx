import { FullScreenLoading, MentorDetailsSection, NoMentorFound } from "@/components";
import { useTitle } from "@/hooks";
import { useMentorStore } from "@/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MentorDetails = () => {
    const {id} = useParams();
    const [mentor, setMentor] = useState(null);
    const {getMentorByID, isLoading} = useMentorStore()
    useTitle(`${mentor ? mentor.name : "Mentor"} Details`);
    useEffect(()=> {
        (async () => {
            if(id) setMentor(await getMentorByID(id))
        })()
    }, [id, getMentorByID])
    if(isLoading) return <div className="flex flex-1">
        <FullScreenLoading />
    </div>
    if(!mentor) return <NoMentorFound />
    return (
        <div className="p-5 md:p-10 flex-1">
            <MentorDetailsSection data={mentor}/>
        </div>
    );
};

export default MentorDetails;