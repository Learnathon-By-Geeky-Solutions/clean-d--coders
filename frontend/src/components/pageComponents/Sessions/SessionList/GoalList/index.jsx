import { useState } from "react";
import PropTypes from 'prop-types';
import MilestoneList from "../MilestoneList";
import { ChevronRight } from "lucide-react";
import { useSessionStore } from "@/store";

const GoalList = ({ goals,role }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const {getGoalStatus} = useSessionStore();
  
    return (
      <div className="w-full max-w-full">
        <ul className="bg-gray-100 rounded-md overflow-hidden">
          {goals.map((goal, index) => (
                <li key={goal.name+index} className="mb-2 last:mb-0">
                <button
                  className={`justify-between w-full p-3 flex items-center cursor-pointer transition-colors duration-300 ${
                    expandedIndex === index
                      ? "bg-blue-200"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  aria-expanded={expandedIndex === index}
                >
                <div className="flex items-center">     <ChevronRight
                    className={`mr-2 h-4 w-4 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-90" : ""
                    }`}
                  />
                  {goal.name}</div>
                  {(() => {
  const status = getGoalStatus(goal.id);
  let statusClass = '';

  switch (status) {
    case 'in progress':
      statusClass = 'text-orange-500 font-bold';
      break;
    case 'completed':
      statusClass = 'text-green-600 font-bold';
      break;
    case 'not started':
      statusClass = 'text-red-500 font-bold';
      break;
    default:
      statusClass = 'text-black font-bold';
  }

  return <span className={statusClass}>{status}</span>;
})()}
                </button>
                {expandedIndex === index && (
                 <div className="pl-4 py-2 bg-white border-l-4 border-blue-200 shadow-md">
                <MilestoneList milestones={goal.milestones} role={role}/>
               </div>
                )}
              </li>
        
          ))}
        </ul>
      </div>
    );
  };

  GoalList.propTypes = {
    goals: PropTypes.array.isRequired,
    role: PropTypes.string.isRequired,
  };

  export default GoalList;