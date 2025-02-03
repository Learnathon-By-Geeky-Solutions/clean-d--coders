import { DashboardHeading, TableSkeleton } from "@/components";
import { useTitle } from "@/hooks";

const Users = () => {
  useTitle("Users");
  return (
    <div className="flex-1 overflow-hidden">
      <DashboardHeading>Users</DashboardHeading>
      <TableSkeleton />
    </div>
  );
};

export default Users;
