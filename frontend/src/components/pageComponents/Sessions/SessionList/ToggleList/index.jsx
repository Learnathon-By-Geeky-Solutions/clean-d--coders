import React, { useState } from 'react'
import { ChevronRight } from "lucide-react";
import GoalList from '../GoalList';
import PropTypes from "prop-types";

const ToggleList = ({user,index, role, image}) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <li key={index} className="mb-2 last:mb-0">
    <button
      className={`w-full p-3 flex items-center cursor-pointer transition-colors duration-300 ${
        expandedIndex === index
          ? "bg-blue-100"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={() =>
        setExpandedIndex(expandedIndex === index ? null : index)
      }
      aria-expanded={expandedIndex === index}
    >
      <ChevronRight
        className={`mr-2 h-4 w-4 transition-transform duration-300 ${
          expandedIndex === index ? "rotate-90" : ""
        }`}
      />
     <div className='flex items-center gap-x-2  '>
     <img src={image} alt="" className="w-12 h-12 rounded-full border-2 border-blue-500" />
      <div className="text-lg font-semibold text-gray-700"> {user.name}</div>
     </div>
    </button>
    {expandedIndex === index && (
     <div className="pl-4 py-2 bg-white border-l-4 border-blue-100 shadow-md">
     <GoalList goals={user.goals} role={role} />
   </div>
    )}
  </li>
  )
}

ToggleList.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
};

export default ToggleList;