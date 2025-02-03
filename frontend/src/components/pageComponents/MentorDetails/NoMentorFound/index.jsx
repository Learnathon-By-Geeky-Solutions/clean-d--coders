import { Button } from "@/components/ui";
import { pathMentors } from "@/utils";
import { Link } from "react-router";

const NoMentorFound = () => {
  return (
    <div className="flex flex-1 justify-center items-center px-5 text-2xl text-center">
      <p>
        No mentor found
        <br />
        Please find your desired mentor from{" "}
        <Link to={pathMentors}>
          <Button variant="navlink">Mentors</Button>
        </Link>
      </p>
    </div>
  );
};

export default NoMentorFound;
