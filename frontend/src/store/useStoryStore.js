import { create } from "zustand";

const initialStories = [
  {
    id: 1,
    name: "Ryan Carter",
    image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg",
    description: "Ryan Carter is an AI researcher focused on advancing deep learning models for natural language processing. His work has contributed to breakthroughs in conversational AI and automation, making technology more accessible."
  },
  {
    id: 2,
    name: "Olivia Martinez",
    image: "https://img.freepik.com/free-vector/businesswoman-character-avatar-isolated_24877-60111.jpg",
    description: "Olivia Martinez is a product manager with expertise in SaaS solutions. She has successfully led multiple teams in launching user-friendly software products that solve real-world problems for businesses and individuals alike."
  },
  {
    id:3,
    name: "Jason Kim",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    description: "Jason Kim is a seasoned game developer who has worked on multiple award-winning indie games. His passion for interactive storytelling and immersive gameplay has earned him a strong reputation in the industry."
  },
  {
    id:4,
    name: "Sophia Reynolds",
    image: "https://img.freepik.com/free-vector/young-woman-avatar-character_24877-15417.jpg",
    description: "Sophia Reynolds is a nutritionist and wellness coach who helps individuals create personalized health plans. She has guided countless clients toward achieving their fitness and dietary goals through scientific approaches."
  },
  {
    id:5,
    name: "Ethan Walker",
    image: "https://img.freepik.com/free-vector/young-man-avatar-character_24877-15417.jpg",
    description: "Ethan Walker is a cloud computing specialist who has helped enterprises migrate to scalable cloud solutions. His expertise in cloud security and infrastructure optimization has revolutionized business operations for various companies."
  },
  {
    id:6,
    name: "Natalie Scott",
    image: "https://img.freepik.com/free-vector/young-girl-avatar-character_24877-15420.jpg",
    description: "Natalie Scott is an award-winning fashion designer known for her sustainable and eco-friendly clothing line. Her unique approach to blending modern aesthetics with ethical fashion has gained her a global following."
  },
  {
    id: 7,
    name: "Daniel Foster",
    image: "https://img.freepik.com/free-vector/young-boy-avatar-character_24877-15419.jpg",
    description: "Daniel Foster is a robotics engineer developing AI-powered automation for industrial applications. His innovations in autonomous systems have paved the way for increased efficiency and productivity in various sectors."
  }
];


const useStoryStore = create((set) => ({
  stories: initialStories,
  addStory: (story) => set((state) => ({ stories: [...state.stories, story] })),
  removeStory: (story) => set((state) => ({ stories: state.stories.filter((s) => s !== story) })),
}));

export default useStoryStore;