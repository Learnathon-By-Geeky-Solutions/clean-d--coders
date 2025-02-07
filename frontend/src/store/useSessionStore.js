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
              image: "https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg",
              goals: [
                {
                  id: 1,
                  name: "Start a career in Data Science",
                  milestones: [
                    {
                      name: "Milestone 1: Complete Data Science Certification Course",
                      tasks: [
                        { name: "Python Basics", completed: true },
                        { name: "Data Visualization", completed: false },
                        { name: "Machine Learning", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Build a portfolio with 3 projects",
                      tasks: [
                        { name: "Complete 3 projects on Data Science", completed: true },
                        { name: "Keep the project in GitHub", completed: false },
                        { name: "Write documentation for each project", completed: false },
                        { name: "Add project descriptions and links to the portfolio website", completed: false },
                        { name: "Review and polish the portfolio", completed: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Sarah Ahmed",
              image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
              goals: [
                {
                  id: 3,
                  name: "Improve public speaking skills",
                  milestones: [
                    {
                      name: "Milestone 1: Join a public speaking club",
                      tasks: [
                        { name: "Research public speaking clubs", completed: true },
                        { name: "Attend a trial session", completed: false },
                        { name: "Enroll in the club", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Prepare and deliver 3 speeches",
                      tasks: [
                        { name: "Select speech topics", completed: true },
                        { name: "Write speech drafts", completed: false },
                        { name: "Practice delivery", completed: false },
                        { name: "Deliver the speeches", completed: false },
                        { name: "Receive and incorporate feedback", completed: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Michael Johnson",
              image: "https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg",
              goals: [
                {
                  id: 4,
                  name: "Become proficient in Git",
                  milestones: [
                    {
                      name: "Milestone 1: Complete a Git course",
                      tasks: [
                        { name: "Enroll in a Git course", completed: true },
                        { name: "Complete course modules", completed: false },
                        { name: "Pass the final exam", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Apply Git in a real project",
                      tasks: [
                        { name: "Create a Git repository", completed: true },
                        { name: "Collaborate with teammates", completed: false },
                        { name: "Merge branches", completed: false },
                        { name: "Resolve conflicts", completed: false },
                        { name: "Document the workflow", completed: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Olivia Brown",
              image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
              goals: [
                {
                  id: 5,
                  name: "Learn Flutter and build mobile apps",
                  milestones: [
                    {
                      name: "Milestone 1: Set up Flutter development environment",
                      tasks: [
                        { name: "Install Flutter SDK", completed: true },
                        { name: "Configure IDE", completed: false },
                        { name: "Run a sample project", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Develop a basic mobile app",
                      tasks: [
                        { name: "Design app layout", completed: true },
                        { name: "Implement UI components", completed: false },
                        { name: "Add functionality", completed: false },
                        { name: "Test and debug", completed: false },
                        { name: "Deploy the app", completed: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          mentee: [
            {
              name: "Mahamudul Hasan",
              image: "https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg",
              goals: [
                {
                  id: 2,
                  name: "Start a career in Data Science",
                  milestones: [
                    {
                      name: "Milestone 1: Complete Data Science Certification Course",
                      tasks: [
                        { name: "Python Basics", completed: true },
                        { name: "Data Visualization", completed: false },
                        { name: "Machine Learning", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Build a portfolio with 3 projects",
                      tasks: [
                        { name: "Complete 3 projects on Data Science", completed: true },
                        { name: "Keep the project in GitHub", completed: false },
                        { name: "Write documentation for each project", completed: false },
                        { name: "Add project descriptions and links to the portfolio website", completed: false },
                        { name: "Review and polish the portfolio", completed: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Nadia Rahman",
              image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
              goals: [
                {
                  id: 6,
                  name: "Improve coding skills in C++",
                  milestones: [
                    {
                      name: "Milestone 1: Complete a C++ course",
                      tasks: [
                        { name: "Enroll in a C++ course", completed: true },
                        { name: "Complete course modules", completed: false },
                        { name: "Pass the final exam", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Work on C++ projects",
                      tasks: [
                        { name: "Select project ideas", completed: true },
                        { name: "Write project code", completed: false },
                        { name: "Test and debug", completed: false },
                        { name: "Document the projects", completed: false },
                        { name: "Showcase projects on GitHub", completed: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Arif Hossain",
              image: "https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg",
              goals: [
                {
                  id: 7,
                  name: "Master data analysis with Python",
                  milestones: [
                    {
                      name: "Milestone 1: Learn data analysis libraries",
                      tasks: [
                        { name: "Study pandas library", completed: true },
                        { name: "Learn NumPy basics", completed: true },
                        { name: "Explore Matplotlib for visualization", completed: true }
                      ]
                    },
                    {
                      name: "Milestone 2: Analyze real-world datasets",
                      tasks: [
                        { name: "Find suitable datasets", completed: true },
                        { name: "Clean and preprocess data", completed: true },
                        { name: "Perform exploratory data analysis", completed: true },
                        { name: "Visualize results", completed: true },
                        { name: "Report findings", completed: true }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Sumiya Khatun",
              image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
              goals: [
                {
                  id: 8,
                  name: "Learn web development",
                  milestones: [
                    {
                      name: "Milestone 1: Master front-end technologies",
                      tasks: [
                        { name: "Learn HTML basics", completed: false },
                        { name: "Study CSS for styling", completed: false },
                        { name: "Understand JavaScript fundamentals", completed: false }
                      ]
                    },
                    {
                      name: "Milestone 2: Build a personal website",
                      tasks: [
                        { name: "Design website layout", completed: false },
                        { name: "Develop static pages", completed: false },
                        { name: "Implement interactive features", completed: false },
                        { name: "Test and deploy website", completed: false },
                        { name: "Collect user feedback", completed: false }
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
