import { useState } from "react";
import PropTypes from 'prop-types';
import TaskList from "../TaskList";
import { Dialog,DialogOverlay, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSessionStore } from "@/store";

const MilestoneList = ({ milestones, role,goalId }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const { getMilestoneProgress } = useSessionStore();

  const openModal = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div>
      <ul className="pl-5">
        {milestones.map((milestone, index) => (
       <li key={milestone.name + index} className="mb-2 shadow-lg">
<button 
  className="w-full text-left px-5 py-4 rounded-lg shadow-md hover:shadow-lg 
  bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-100 hover:to-blue-300 
  transition-all duration-300 cursor-pointer transform hover:scale-105"
  onClick={() => openModal(milestone)}
>
 <div className="flex items-center justify-between">
 <span className="text-md font-semibold text-gray-800">{milestone.name}</span>
 {(() => {
                  const progress = getMilestoneProgress(goalId, milestone.name);
                  return progress ? (
                    <span className="font-bold text-teal-600"> {progress.progressPercentage}% completed</span>
                  ) :  <span > not started</span>;
                })()}
 </div>
</button>
     </li>
        ))}
      </ul>
      {selectedMilestone && (
        <Dialog open={true} onOpenChange={closeModal}>
          <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          <DialogContent className="flex items-center justify-center p-4">
            <div className="bg-white rounded-lg  p-6 max-w-md mx-auto">
              <DialogTitle className="text-xl font-bold mb-4">{selectedMilestone.name}</DialogTitle>
              <DialogDescription>
                <TaskList tasks={selectedMilestone.tasks} role={role} />
              </DialogDescription>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Close
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

MilestoneList.propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tasks: PropTypes.array.isRequired,
      goalId: PropTypes.number.isRequired,
    })
  ).isRequired,
  role: PropTypes.string.isRequired,
};

export default MilestoneList;