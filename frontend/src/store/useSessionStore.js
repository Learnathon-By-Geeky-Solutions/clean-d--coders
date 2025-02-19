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
            name: "Liam Thompson",
            image: "https://img.freepik.com/free-vector/businessman-character-avatar_24877-60111.jpg",
            goals: [
              {
                id: 1,
                name: "Become a Cloud Computing Expert",
                milestones: [
                  {
                    name: "Milestone 1: Get AWS Certified",
                    tasks: [
                      { name: "Complete AWS fundamentals course", completed: true },
                      { name: "Practice hands-on labs", completed: false },
                      { name: "Pass the AWS certification exam", completed: false }
                    ]
                  },
                  {
                    name: "Milestone 2: Deploy scalable applications",
                    tasks: [
                      { name: "Set up a cloud-based web app", completed: true },
                      { name: "Implement auto-scaling and load balancing", completed: false },
                      { name: "Optimize cost and security measures", completed: false },
                      { name: "Monitor and troubleshoot performance", completed: false }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "Sophia White",
            image: "https://img.freepik.com/free-vector/young-woman-avatar-character_24877-15417.jpg",
            goals: [
              {
                id: 2,
                name: "Master UI/UX Design",
                milestones: [
                  {
                    name: "Milestone 1: Learn UI/UX principles",
                    tasks: [
                      { name: "Study design thinking concepts", completed: true },
                      { name: "Learn wireframing tools", completed: false },
                      { name: "Create mockups for an app", completed: false }
                    ]
                  },
                  {
                    name: "Milestone 2: Build a portfolio",
                    tasks: [
                      { name: "Design three portfolio projects", completed: true },
                      { name: "Create a personal website", completed: false },
                      { name: "Refine project presentations", completed: false },
                      { name: "Apply for UI/UX design roles", completed: false }
                    ]
                  }
                ]
              }
            ]
          },
  
        ],
        mentee: [
          {
            name: "Emma Clark",
            image: "https://img.freepik.com/free-vector/female-avatar-profile-picture-vector-illustration_268834-538.jpg",
            goals: [
              {
                id: 4,
                name: "Learn Python for Automation",
                milestones: [
                  {
                    name: "Milestone 1: Master Python basics",
                    tasks: [
                      { name: "Understand Python syntax", completed: true },
                      { name: "Learn data structures and loops", completed: false },
                      { name: "Write simple automation scripts", completed: false }
                    ]
                  },
                  {
                    name: "Milestone 2: Automate real-world tasks",
                    tasks: [
                      { name: "Develop a web scraping bot", completed: true },
                      { name: "Automate file organization", completed: false },
                      { name: "Write scripts for email automation", completed: false },
                      { name: "Deploy scripts for daily workflow optimization", completed: false }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "Noah Patel",
            image: "https://img.freepik.com/free-vector/businessman-character-avatar_24877-60111.jpg",
            goals: [
              {
                id: 5,
                name: "Build an AI-powered chatbot",
                milestones: [
                  {
                    name: "Milestone 1: Understand NLP basics",
                    tasks: [
                      { name: "Study NLP fundamentals", completed: true },
                      { name: "Learn about chatbots and intents", completed: true },
                      { name: "Experiment with text preprocessing techniques", completed: true }
                    ]
                  },
                  {
                    name: "Milestone 2: Develop and deploy the chatbot",
                    tasks: [
                      { name: "Train chatbot using Rasa or Dialogflow", completed: true },
                      { name: "Integrate chatbot with a messaging platform", completed: true },
                      { name: "Optimize responses using feedback", completed: true },
                      { name: "Launch chatbot in a real-world scenario", completed: true }
                    ]
                  }
                ]
              }
            ]
          }

        ]
      }
      
      ,
      isLoading: false,
    });
  },
  getGoalStatus: (id) => {
    const { sessions } = get();
    if (!sessions) return "not started";

    const allGoals = [...sessions.mentor, ...sessions.mentee].flatMap(person => person.goals);
    const goal = allGoals.find(goal => goal.id === id);

    if (!goal) return "not started";

    let allTasksCompleted = true;
    let anyTaskCompleted = false;

    goal.milestones.forEach(milestone => {
      milestone.tasks.forEach(task => {
        if (task.completed) {
          anyTaskCompleted = true;
        } else {
          allTasksCompleted = false;
        }
      });
    });

    if (allTasksCompleted) return "completed";
    if (anyTaskCompleted) return "in progress";
    return "not started";
  },
  getMilestoneProgress: (goalId, milestoneName) => {
    console.log(goalId, milestoneName);
    const { sessions } = get();
    if (!sessions) return null;

    const allGoals = [...sessions.mentor, ...sessions.mentee].flatMap(person => person.goals);
    const goal = allGoals.find(goal => goal.id === goalId);

    if (!goal) return null;

    const milestone = goal.milestones.find(milestone => milestone.name === milestoneName);
    if (!milestone) return null;

    const totalTasks = milestone.tasks.length;
    const completedTasks = milestone.tasks.filter(task => task.completed).length;
    const progressPercentage = (completedTasks / totalTasks) * 100;

    return {
      progressPercentage: progressPercentage.toFixed(0) // returns percentage with 2 decimal places
    };
  }

}));
export default useSessionStore;
