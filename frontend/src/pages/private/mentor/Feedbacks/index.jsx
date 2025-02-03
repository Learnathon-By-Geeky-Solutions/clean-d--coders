import { DashboardHeading } from "@/components";
import { useTitle } from "@/hooks";

const Feedbacks = () => {
  useTitle("Feedbacks");
  return (
    <div>
      <DashboardHeading>Feedbacks</DashboardHeading>
    </div>
  );
};

export default Feedbacks;
