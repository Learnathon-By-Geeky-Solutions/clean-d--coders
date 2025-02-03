import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const StartJourney = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to Start Your Journey?
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Whether your are looking to share your expertise or seeking guidance,
        join our community today and be part of something extraordinary.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/mentors">
          <Button size="lg">Find a Mentor</Button>
        </Link>
        <Link to="/sign-up">
          <Button size="lg" variant="outline">
            Become a Mentor
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StartJourney;
