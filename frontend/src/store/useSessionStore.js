import { create } from "zustand";
const useSessionStore = create((set, get) => ({
  sessions: null,
  isLoading: true,
  setSessions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    set({
      sessions: {
        mentor: [
          {
            name: "Reaz Tawsif",
            goals: [
              {
                id : 1,
                name: "Start a career in Data Science",
                milestones: [
                  {
                    name: "Milestone 1: Complete Data Science Cerfication Course",
                    tasks: [
                      { name: "Python Basics", completed: true },
                      { name: "Data Visualization", completed: false },
                      { name: "Machine Learnign", completed: false }
                     
                    ],
                  },
                  {
                    "name": "Milestone 2: Build a portfolio with 3 projects",
                    "tasks": [
                      { "name": "Complete 3 projects on Data Science", "completed": true },
                      { "name": "Keep the project in GitHub", "completed": false },
                      { "name": "Write documentation for each project", "completed": false },
                      { "name": "Add project descriptions and links to the portfolio website", "completed": false },
                      { "name": "Review and polish the portfolio", "completed": false }
                    ]
                  }
                  
                ],
              },
            ],
          },
        ],
        mentee: [
          {
            name: "Mahamudul Hasan",
            goals: [
              {
                id : 2,
                name: "Start a career in Data Science",
                milestones: [
                  {
                    name: "Milestone 1: Complete Data Science Cerfication Course",
                    tasks: [
                      { name: "Python Basics", completed: true },
                      { name: "Data Visualization", completed: false },
                      { name: "Machine Learnign", completed: false }
                    ]
                  },
                  {
                    "name": "Milestone 2: Build a portfolio with 3 projects",
                    "tasks": [
                      { "name": "Complete 3 projects on Data Science", "completed": true },
                      { "name": "Keep the project in GitHub", "completed": false },
                      { "name": "Write documentation for each project", "completed": false },
                      { "name": "Add project descriptions and links to the portfolio website", "completed": false },
                      { "name": "Review and polish the portfolio", "completed": false }
                    ]
                  }
                  
                ],
              },
            ],
          },
        ],
      },
      isLoading: false,
    });
  },
  getGoalStatus: (id)=>{
    return "completed";
  }
}));
export default useSessionStore;
