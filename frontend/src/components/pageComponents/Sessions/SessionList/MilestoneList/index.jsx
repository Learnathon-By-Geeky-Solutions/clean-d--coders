import { useState } from "react";
import PropTypes from 'prop-types';
import TaskList from "../TaskList";
import { Dialog,DialogOverlay, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const MilestoneList = ({ milestones, role }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

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
         className="w-full text-left px-4 py-3 rounded-lg shadow-sm hover:shadow-xl 
         bg-white hover:bg-gray-50 transition-all duration-200 cursor-pointer"
         onClick={() => openModal(milestone)}
       >
         {milestone.name}
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
    })
  ).isRequired,
  role: PropTypes.string.isRequired,
};

export default MilestoneList;