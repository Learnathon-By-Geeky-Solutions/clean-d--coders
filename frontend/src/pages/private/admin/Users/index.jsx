import { TableSkeleton } from "@/components";

const Users = () => {
  return (
    <div className="flex-1 overflow-hidden">
      All Users
      <TableSkeleton />
    </div>
  );
};

export default Users;
