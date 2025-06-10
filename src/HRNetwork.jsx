import React from 'react';
import { Card } from './components/ui/Card';

const HRNetwork = () => {
  const professionals = [
    {
      name: "Riya Sharma",
      position: "Senior HR @ Google",
      description: "Expert in tech hiring and culture building. Loves mentoring freshers.",
    },
    {
      name: "Amit Verma",
      position: "HRBP @ Microsoft",
      description: "Focuses on employee experience and campus recruitments.",
    },
    {
      name: "Neha Desai",
      position: "Talent Acquisition @ Zomato",
      description: "Known for startup hiring and creative onboarding strategies.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Connect with HR Professionals</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {professionals.map((hr, index) => (
          <Card key={index} className="p-6 hover:shadow-xl border border-border transition-all duration-300">
            <h2 className="text-xl font-semibold text-foreground">{hr.name}</h2>
            <p className="text-sm text-muted-foreground">{hr.position}</p>
            <p className="mt-2 text-muted-foreground text-sm">{hr.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HRNetwork;
