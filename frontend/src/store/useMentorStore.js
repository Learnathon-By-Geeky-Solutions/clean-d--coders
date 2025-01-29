import { apiAllMentors } from "@/utils";
import { create } from "zustand";
const filterByCompanies = (mentors, companies) => {
    if (companies[0] === "all") return mentors;
    return mentors.filter((m) => companies.includes(m.company));
  };
  
  const filterByUniversities = (mentors, universities) => {
    if (universities[0] === "all") return mentors;
    return mentors.filter((m) => universities.includes(m.university));
  };
  
  const filterByCosts = (mentors, costs) => {
    if (costs[0] === "all") return mentors;
    return mentors.filter((m) => {
      return (
        (m.cost === 0 && costs.includes("unpaid")) ||
        (m.cost !== 0 && costs.includes("paid"))
      );
    });
  };
  
  const filterByTags = (mentors, tags) => {
    if (tags[0] === "all") return mentors;
    return mentors.filter((m) => tags.some((tt) => m.tags.includes(tt)));
  };
const useMentorStore = create((set) => ({
  mentors: [],
  allMentors: [],
  isLoading: true,
  filterData: {
    companies: ["all"],
    universities: ["all"],
    costs: ["all"],
    tags: ["all"],
  },
  setMentors: async () => {
    let res = await fetch(apiAllMentors);
    let data = await res.json();
    let temp = {
      companies: ["all"],
      universities: ["all"],
      costs: ["all"],
      tags: ["all"],
    };
    data.forEach((m) => {
      if (!temp.universities.includes(m.university))
        temp.universities.push(m.university);
      if (!temp.companies.includes(m.company)) temp.companies.push(m.company);

      if (m.cost === 0 && !temp.costs.includes("unpaid"))
        temp.costs.push("unpaid");
      else if (m.cost !== 0 && !temp.costs.includes("paid"))
        temp.costs.push("paid");

      m.tags.forEach((t) => {
        if (!temp.tags.includes(t)) temp.tags.push(t);
      });
    });
    set({
      mentors: data,
      allMentors: data,
      isLoading: false,
      filterData: temp,
    });
  },
  setFilteredMentor: (filter) => {
    set((state) => {
      const { companies, costs, tags, universities } = filter;
      let newMentors = [...state.allMentors];
      newMentors = filterByCompanies(newMentors, companies);
      newMentors = filterByUniversities(newMentors, universities);
      newMentors = filterByCosts(newMentors, costs);
      newMentors = filterByTags(newMentors, tags);
      return { ...state, mentors: newMentors };
    });
  },
  setUnFillteredMentor: () =>
    set((state) => ({
      ...state,
      mentors: state.allMentors,
      filterData: {
        companies: ["all"],
        universities: ["all"],
        costs: ["all"],
        tags: ["all"],
      },
    })),
  setSortedMentors: (sortByCost) => {
    set(state => {
        let newMentors = [...state.mentors]
        if(sortByCost) newMentors.sort((a, b) => b.cost - a.cost)
        else newMentors.sort((a, b) => a.cost - b.cost)
        return {
            ...state,
            mentors: newMentors
        } 
    })
  },
}));
export default useMentorStore;
