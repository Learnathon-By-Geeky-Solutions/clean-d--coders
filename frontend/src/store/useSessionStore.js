import { create } from "zustand";
const useSessionStore = create((set, get) => ({
  sessions: null,
  isLoading: true,
  setSessions: async () => {
    get();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    set({
      sessions: {
        mentor: [
          {
            name: "Mentee 1",
            goals: [
              {
                name: "Goal 1",
                milestones: [
                  {
                    name: "Milestone 3",
                    tasks: [
                      { name: "Task 1", completed: true },
                      { name: "Task 2", completed: false },
                    ],
                  },
                  {
                    name: "Milestone 4",
                    tasks: [
                      { name: "Task 3", completed: false },
                      { name: "Task 4", completed: true },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        mentee: [
          {
            name: "Mentor 2",
            goals: [
              {
                name: "Goal 2",
                milestones: [
                  {
                    name: "Milestone 3",
                    tasks: [
                      { name: "Task 5", completed: true },
                      { name: "Task 6", completed: false },
                    ],
                  },
                  {
                    name: "Milestone 4",
                    tasks: [
                      { name: "Task 7", completed: false },
                      { name: "Task 8", completed: true },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      isLoading: false,
    });
  },
}));
export default useSessionStore;
