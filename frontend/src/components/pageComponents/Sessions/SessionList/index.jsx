import PropTypes from "prop-types";
import GoalList from "./GoalList";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const SessionList = ({ users, role }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="w-full max-w-full mt-5">
      <ul className="bg-gray-100 rounded-md overflow-hidden">
        {users.map((user, index) => (
          <li key={user.name + index} className="mb-2 last:mb-0">
            <button
              className={`w-full p-3 flex items-center cursor-pointer transition-colors duration-300 ${
                expandedIndex === index
                  ? "bg-blue-200"
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
              {user.name}
            </button>
            {expandedIndex === index && (
             <div className="pl-4 py-2 bg-white border-l-4 border-blue-200 shadow-md">
             <GoalList goals={user.goals} role={role} />
           </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

SessionList.propTypes = {
  users: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
};

export default SessionList;
