import React from 'react';
import {
  Users,
  UserCircle,
  HandshakeIcon,
  Calendar,
  CreditCard,
  Target,
  MessageSquare,
  Award,
} from 'lucide-react';

const UserGuide = () => {
  const guideItems = [
    {
      title: "User Roles",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: [
        "Mentees: University students and recent graduates seeking guidance",
        "Mentors: Experienced professionals or alumni sharing expertise"
      ]
    },
    {
      title: "Profile Creation",
      icon: <UserCircle className="w-8 h-8 text-primary" />,
      description: [
        "Create detailed profiles highlighting your expertise or interests",
        "Showcase skills, experience, and areas of specialization"
      ]
    },
    {
      title: "Smart Matching",
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      description: [
        "Advanced algorithm pairs mentees with suitable mentors",
        "Matching based on interests, goals, and expertise"
      ]
    },
    {
      title: "Session Scheduling",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      description: [
        "Book one-on-one mentoring sessions easily",
        "Integrated calendar with automatic reminders"
      ]
    },
    {
      title: "Payment Processing",
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      description: [
        "Secure payment system for paid mentoring sessions",
        "Transparent pricing and easy transaction process"
      ]
    },
    {
      title: "Goal Setting",
      icon: <Target className="w-8 h-8 text-primary" />,
      description: [
        "Set specific career and skill development goals",
        "Track progress through defined milestones"
      ]
    },
    {
      title: "Feedback System",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      description: [
        "Provide feedback after each mentoring session",
        "Continuous improvement through valuable insights"
      ]
    },
    {
      title: "Certification",
      icon: <Award className="w-8 h-8 text-primary" />,
      description: [
        "Receive certificates upon goal completion",
        "Recognition of achievement and progress"
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h1>
        <p className="text-xl text-gray-600">Your journey to professional growth starts here</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              {item.title}
            </h3>
            <ul className="space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-gray-600 text-sm">
                  • {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGuide;