import { useTitle } from "@/hooks";
import { useParams } from "react-router";

const MentorDetails = () => {
    useTitle("Mentor Details");
    const {id} = useParams();
    return (
        <div>
            Mentor Details {id}
        </div>
    );
};

export default MentorDetails;