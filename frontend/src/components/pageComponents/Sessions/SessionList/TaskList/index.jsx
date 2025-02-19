import PropTypes from 'prop-types';
import { useState } from "react";
import { CheckCircle2, Circle } from 'lucide-react';

const TaskList = ({ tasks, role }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleCheckboxChange = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  return (
    <div className="space-y-3">
      {taskList.map((task, index) => (
        <div 
          key={task.name + index} 
          className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-indigo-500 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            {role === "mentor" ? (
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors duration-200"
              />
            ) : (
              <span className="flex items-center">
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </span>
            )}
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
              {task.name}
            </span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            task.completed 
              ? 'bg-green-50 text-green-700' 
              : 'bg-gray-50 text-gray-600'
          }`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
};

export default TaskList;