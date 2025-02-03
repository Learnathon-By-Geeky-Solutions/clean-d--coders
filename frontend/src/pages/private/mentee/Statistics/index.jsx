import { DashboardHeading } from "@/components";
import { useTitle } from "@/hooks";

const Statistics = () => {
  useTitle("Statistics");
  return (
    <div>
      <DashboardHeading>Statistics</DashboardHeading>
    </div>
  );
};

export default Statistics;
