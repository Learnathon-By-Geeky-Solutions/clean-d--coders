import { Button } from "@/components/ui";
import { pathMentors } from "@/utils";
import { Link } from "react-router";

const OnlyUserRole = () => {
  return (
    <div className="text-center">
      <p>
        Please attend a session from{" "}
        <Link to={pathMentors}>
          <Button size="sm" variant="default">
            Mentors
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default OnlyUserRole;
