import { Img } from "@/components/common";
import { getCapitalCase, getDBValToCamelCase, pathMentorDetails } from "@/utils";
import { Link } from "react-router";
import PropTypes from 'prop-types';

const SingleMentorCard = ({data}) => {
    return (
        <Link to={`${pathMentorDetails}/${data.id}`} className="rounded-xl shadow-lg p-5 md:hover:scale-95 duration-150 ease-in-out" draggable={false}>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                    <p className="text-2xl">{data.name}</p>
                    <p className="text-green-400 font-medium">{data.cost}$</p>
                </div>
                <Img 
                    alt="user avatar"
                    src={data.image}
                    className="rounded-full h-20 aspect-square"
                />
            </div>
            <div className="my-5 flex justify-between items-start gap-5">
                <p className="opacity-60">Tags:</p>
                <p className="w-2/3">{data.tags.map(t => getCapitalCase(t)).join(", ")}</p>
            </div>
            <div className="flex justify-between items-start gap-5">
                <p className="opacity-60">Company:</p>
                <p className="w-2/3">{getDBValToCamelCase(data.company)}</p>
            </div>
        </Link>
    );
};
SingleMentorCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        company: PropTypes.string.isRequired,
    }).isRequired,
};

export default SingleMentorCard;