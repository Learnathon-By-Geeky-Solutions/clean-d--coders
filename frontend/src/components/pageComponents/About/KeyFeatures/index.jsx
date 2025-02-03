import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Users, Zap, DollarSign } from "lucide-react";

const KeyFeatures = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Users className="h-8 w-8 mb-4" />,
            title: "Expert Mentors",
            description:
              "Access to a diverse pool of experienced professionals",
          },
          {
            icon: <Zap className="h-8 w-8 mb-4" />,
            title: "Flexible Sessions",
            description: "Schedule one-on-one mentorship sessions",
          },
          {
            icon: <DollarSign className="h-8 w-8 mb-4" />,
            title: "Free & Paid Options",
            description:
              "Choose from free community support or premium paid sessions",
          },
          {
            icon: <CheckCircle className="h-8 w-8 mb-4" />,
            title: "Goal Tracking",
            description: "Set and track your personal and professional goals",
          },
        ].map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardHeader>
              <CardTitle className="flex flex-col items-center">
                {feature.icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
