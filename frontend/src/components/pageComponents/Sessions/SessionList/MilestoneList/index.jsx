import { useState } from "react";
import PropTypes from 'prop-types';
import TaskList from "../TaskList";
import Modal from "react-modal";


const MilestoneList = ({ milestones,role }) => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);
  
    const openModal = (milestone) => {
      setSelectedMilestone(milestone);
    };
  
    const closeModal = () => {
      setSelectedMilestone(null);
    };
  
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s ease-in-out', // Add transition for opacity
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
        transition: 'opacity 0.3s ease-in-out', // Add transition for overlay
      },
    };

    if (selectedMilestone) {
      customStyles.content.opacity = 1;
    }
  
    return (
      <div>
        <ul className="list-disc pl-5">
          {milestones.map((milestone, index) => (
            <li key={milestone.name + index}>
              <button className="cursor-pointer" onClick={() => openModal(milestone)}>
                {milestone.name}
              </button>
            </li>
          ))}
        </ul>
        {selectedMilestone && (
          <Modal
            isOpen={true}
            onRequestClose={closeModal}
            contentLabel="Milestone Details"
            style={customStyles}
          >
            <h2 className="text-xl font-bold mb-4">{selectedMilestone.name}</h2>
            <TaskList tasks={selectedMilestone.tasks} role={role} />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Close
            </button>
          </Modal>
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
