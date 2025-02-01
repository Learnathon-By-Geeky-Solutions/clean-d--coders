import TabSection from "@/components/pageComponents/MentorDetails/MentorDetailsSection/TabSection";
import BannerSection from "./BannerSection";
import PropTypes from 'prop-types';

const MentorDetailsSection = ({data}) => {
    return (
        <div>
           <BannerSection
            name={data.name}
            image={data.image}
            position={data.position}
           /> 
           <TabSection data={data}/>
        </div>
    );
};
MentorDetailsSection.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MentorDetailsSection;