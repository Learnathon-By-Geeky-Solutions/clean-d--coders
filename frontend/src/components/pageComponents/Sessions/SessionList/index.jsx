import PropTypes from "prop-types";
import ToggleList from "./ToggleList";

const SessionList = ({ users, role }) => {

  return (
    <div className="w-full max-w-full mt-5">
      <ul className="bg-gray-100 rounded-md overflow-hidden">
      
        {users.map((user, index) => (
         <ToggleList user = {user} key={index+user.name} index ={index} role = {role}/>
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
