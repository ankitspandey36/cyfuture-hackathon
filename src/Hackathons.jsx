import React from 'react';
import { Card } from './components/ui/Card';
import { Btn } from './components/ui/Btn';

const Hackathons = () => {
  const upcoming = [
    {
      title: "Frontend Frenzy",
      date: "Starts in 3 days",
      description: "Build a beautiful UI in 24 hours and get noticed by top recruiters.",
    },
    {
      title: "Backend Blitz",
      date: "Starts in 7 days",
      description: "Design scalable backend services using Node.js, Go or Rust.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Hackathon Challenges</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((hack, i) => (
          <Card key={i} className="p-6 hover:shadow-xl border border-border transition-all duration-300">
            <h2 className="text-xl font-semibold text-foreground mb-2">{hack.title}</h2>
            <p className="text-muted-foreground mb-4">{hack.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{hack.date}</span>
              <Btn size="sm">Join Now</Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
