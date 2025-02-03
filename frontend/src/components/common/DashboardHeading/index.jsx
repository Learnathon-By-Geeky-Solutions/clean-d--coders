import PropsType from "prop-types"
const DashboardHeading = ({children}) => {
    return (
        <p className="text-center text-4xl font-bold my-5">
            {children}
        </p>
    );
};
DashboardHeading.propTypes = {
    children: PropsType.node
}
export default DashboardHeading;