import { TableSkeleton } from "@/components";
import { useTitle } from "@/hooks";

const Sessions = () => {
    useTitle("Sessions");
    return (
        <div className="flex-1 overflow-hidden">
           Sessions 
           <TableSkeleton />
        </div>
    );
};

export default Sessions;