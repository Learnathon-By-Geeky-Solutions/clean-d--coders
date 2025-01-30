import TabSection from "@/components/pageComponents/MentorDetails/MentorDetailsSection/TabSection";
import BannerSection from "./BannerSection";
import PropTypes from 'prop-types';

const MentorDetailsSection = ({data}) => {
    return (
        <div>
           <BannerSection
            name={data.name}
            image={data.image}
           /> 
           <TabSection data={data}/>
        </div>
    );
};
MentorDetailsSection.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default MentorDetailsSection;