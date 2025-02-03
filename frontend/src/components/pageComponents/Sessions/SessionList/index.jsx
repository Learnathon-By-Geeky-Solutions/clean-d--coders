import PropTypes from "prop-types";

const SessionList = ({ users, role }) => {
  return (
    <div>
      <p>my role {role}</p>
      {users.map((session, index) => (
        <div key={"" + index}>{session.name}</div>
      ))}
    </div>
  );
};

SessionList.propTypes = {
  users: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
};

export default SessionList;
