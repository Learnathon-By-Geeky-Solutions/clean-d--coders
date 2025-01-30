import { FullScreenLoading, MentorDetailsSection, NoMentorFound } from "@/components";
import { useTitle } from "@/hooks";
import { useMentorStore } from "@/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MentorDetails = () => {
    useTitle("Mentor Details");
    const {id} = useParams();
    const [mentor, setMentor] = useState(null);
    const {getMentorByID, isLoading} = useMentorStore()
    useEffect(()=> {
        (async () => {
            if(id) setMentor(await getMentorByID(id))
        })()
    }, [id, getMentorByID])
    if(isLoading) return <FullScreenLoading />
    if(!mentor) return <NoMentorFound />
    return (
        <div className="p-5 md:p-10 flex-1">
            <MentorDetailsSection data={mentor}/>
        </div>
    );
};

export default MentorDetails;