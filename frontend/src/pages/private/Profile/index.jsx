import { DashboardHeading } from "@/components";
import { useTitle } from "@/hooks";

const Profile = () => {
  useTitle("Profile");
  return (
    <div>
      <DashboardHeading>Profile</DashboardHeading>
    </div>
  );
};

export default Profile;
