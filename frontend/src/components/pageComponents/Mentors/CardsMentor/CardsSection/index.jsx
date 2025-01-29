import SingleMentorCard from "@/components/pageComponents/Mentors/CardsMentor/CardsSection/SingleMentorCard";

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
      {[...new Array(4)].map((x, i) => (
        <SingleMentorCard key={"" + i} />
      ))}
    </div>
  );
};

export default CardsSection;
