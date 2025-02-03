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
            <li key={goal.name + index} className="mb-2 last:mb-0">
              <button
                className="w-full bg-gray-200 p-3 flex items-center cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                aria-expanded={expandedIndex === index}
              >
                <ChevronRight
                  className={`mr-2 h-4 w-4 transition-transform ${
                    expandedIndex === index ? 'rotate-90' : ''
                  }`}
                />
                {goal.name} {getGoalStatus(1)}
              </button>
              {expandedIndex === index && (
                <div className="pl-4 py-2 bg-white">
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