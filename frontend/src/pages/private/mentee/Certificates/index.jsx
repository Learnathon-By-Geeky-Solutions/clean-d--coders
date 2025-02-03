import { DashboardHeading } from "@/components";
import { useTitle } from "@/hooks";

const Certificates = () => {
  useTitle("Certificates");
  return (
    <div>
      <DashboardHeading>Certificates</DashboardHeading>
    </div>
  );
};

export default Certificates;
