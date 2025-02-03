import PropsType from "prop-types";
const DashboardHeading = ({ children }) => {
  return (
    <p className="text-end md:text-start text-2xl md:text-4xl font-bold mb-5">
      {children}
    </p>
  );
};
DashboardHeading.propTypes = {
  children: PropsType.node,
};
export default DashboardHeading;
