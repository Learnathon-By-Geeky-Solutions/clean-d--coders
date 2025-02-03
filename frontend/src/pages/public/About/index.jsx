import { useTitle } from "@/hooks";
import {
  AboutDetails,
  KeyFeatures,
  UsersSay,
  StartJourney,
} from "@/components";

const About = () => {
  useTitle("About");
  return (
    <div className="container mx-auto px-4 py-8">
      <AboutDetails />
      <KeyFeatures />
      <UsersSay />
      <StartJourney />
    </div>
  );
};

export default About;
