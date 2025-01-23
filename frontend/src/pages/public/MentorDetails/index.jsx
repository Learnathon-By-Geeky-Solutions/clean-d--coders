import { useParams } from "react-router";

const MentorDetails = () => {
    const {id} = useParams();
    return (
        <div>
            Mentor Details {id}
        </div>
    );
};

export default MentorDetails;