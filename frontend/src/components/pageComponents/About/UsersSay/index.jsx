import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const UsersSay = () => {
  const uniqueKey = Date.now();
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "Alex Johnson",
            role: "Mentee",
            quote:
              "This platform has been instrumental in my career growth. The mentors here are truly world-class!",
          },
          {
            name: "Sarah Lee",
            role: "Mentor",
            quote:
              "I love being able to give back to the community and help shape the next generation of professionals.",
          },
        ].map((testimonial, index) => (
          <Card key={index + uniqueKey}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic">&quot;{testimonial.quote}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UsersSay;
