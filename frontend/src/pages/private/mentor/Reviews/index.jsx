import { DashboardHeading } from "@/components";
import { useTitle } from "@/hooks";

const Reviews = () => {
  useTitle("Reviews");
  return (
    <div>
      <DashboardHeading>Reviews</DashboardHeading>
    </div>
  );
};

export default Reviews;
