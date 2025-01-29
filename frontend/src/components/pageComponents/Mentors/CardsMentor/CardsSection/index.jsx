import SingleMentorCard from "@/components/pageComponents/Mentors/CardsMentor/CardsSection/SingleMentorCard";
import { useMentorStore } from "@/store";

const CardsSection = () => {
  const {mentors} = useMentorStore()
  if(mentors.length === 0) return <div className="text-center">No mentor found.</div>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
      {mentors.map((x) => (
        <SingleMentorCard data={x} key={x.id} />
      ))}
    </div>
  );
};

export default CardsSection;
