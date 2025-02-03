import PropTypes from 'prop-types';
import { useState } from "react";

const TaskList = ({ tasks, role }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleCheckboxChange = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  return (
    <div>
      {taskList.map((task, index) => (
        <div key={task.name + index} className="flex items-center mb-2">
          {role === "mentor" ? (
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox mr-2"
            />
          ) : (
            <span
            className={`inline-block w-3 h-3 rounded-full mr-2 border-2 shadow-md ${
              task.completed ? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"
            }`}
          ></span>
          )}
          <span>{task.name}</span>
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