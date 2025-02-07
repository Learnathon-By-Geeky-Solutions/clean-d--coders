import { useState } from "react";
import PropTypes from "prop-types";
import MilestoneList from "../MilestoneList";
import { ChevronRight } from "lucide-react";
import { useSessionStore } from "@/store";

const GoalList = ({ goals, role }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { getGoalStatus } = useSessionStore();

  return (
    <div className="w-full max-w-full">
      <ul className="bg-gray-100 rounded-md overflow-hidden">
        {goals.map((goal, index) => (
          <li key={goal.name + index} className="mb-2 last:mb-0">
  <button
  className={`justify-between w-full p-4 flex items-center cursor-pointer transition-colors duration-300 rounded-lg shadow-md ${
    expandedIndex === index
      ? "bg-blue-100"
      : "bg-gray-200 hover:bg-gray-300"
  }`}
  onClick={() =>
    setExpandedIndex(expandedIndex === index ? null : index)
  }
  aria-expanded={expandedIndex === index}
>
  <div className="flex items-center font-semibold text-gray-900">
    <ChevronRight
      className={`mr-3 h-5 w-5 transition-transform duration-300 ${
        expandedIndex === index ? "rotate-90" : ""
      }`}
    />
    {goal.name}
  </div>
  {(() => {
    const status = getGoalStatus(goal.id);
    let statusClass = "";

    switch (status) {
      case "in progress":
        statusClass = "text-orange-600 font-bold";
        break;
      case "completed":
        statusClass = "text-green-700 font-bold";
        break;
      case "not started":
        statusClass = "text-red-600 font-bold";
        break;
      default:
        statusClass = "text-black font-bold";
    }

    return <span className={statusClass}>{status}</span>;
  })()}
</button>
            {expandedIndex === index && (
              <div className="pl-4 py-2 bg-white border-l-4 border-blue-200 shadow-md">
                <MilestoneList milestones={goal.milestones} role={role} goalId = {goal.id} />
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
