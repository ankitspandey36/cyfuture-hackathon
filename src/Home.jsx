import React from 'react';
import { Calendar, CheckCircle, Users } from 'lucide-react';
import { Btn } from './components/ui/Btn';
import { Badge } from './components/ui/Badge';
import { Card } from './components/ui/Card';

const Home = ({ className = "" }) => {
    const features = [
        {
            icon: Calendar,
            title: "Speaker Sessions",
            description: "Book exclusive sessions with experienced HR professionals. Get insights, career advice, and industry knowledge directly from the experts."
        },
        {
            icon: CheckCircle,
            title: "Referral Competitions",
            description: "Participate in hackathons and coding challenges to earn referrals from top companies. Showcase your skills and get noticed by HR professionals."
        },
        {
            icon: Users,
            title: "HR Network",
            description: "Connect with a growing network of HR professionals. Build relationships and create opportunities for career growth."
        }
    ];

    const hackathons = [
        {
            title: "Full Stack Challenge",
            description: "Build a complete web application in 48 hours. Win referrals from tech giants.",
            status: "Upcoming",
            timeLeft: "Starts in 5 days"
        },
        {
            title: "AI Innovation Sprint",
            description: "Create innovative AI solutions for HR challenges. Connect with leading tech companies.",
            status: "Open",
            timeLeft: "2 days left"
        },
        {
            title: "Mobile App Contest",
            description: "Design and develop a mobile application that solves real-world problems.",
            status: "Upcoming",
            timeLeft: "Starts in 12 days"
        }
    ];

    return (
        <div className={`min-h-screen bg-background ${className}`}>
            {/* Navigation */}
            

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                            Connect with Top HR Professionals
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
                            Join our platform to connect with HR professionals, participate in speaker sessions,
                            and compete in hackathons for referrals.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <button className="px-6 py-3 text-lg rounded-md bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                Get Started
                            </button>

                            <button className="px-6 py-3 text-lg rounded-md bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                Browse Sessions
                            </button>



                        </div>

                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="p-6 hover:shadow-xl border border-border transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <Icon className="h-8 w-8 text-primary" />
                                    <h3 className="ml-3 text-xl font-semibold text-foreground">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Hackathon Section */}
            <section className="bg-muted/50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground">Upcoming Hackathons</h2>
                        <p className="mt-4 text-xl text-muted-foreground">
                            Participate in our hackathons to showcase your skills and win referrals from top companies.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {hackathons.map((hackathon, index) => (
                            <Card key={index} className="p-6 hover:shadow-xl border border-border transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {hackathon.title}
                                    </h3>
                                    <Badge
                                        variant={hackathon.status === "Open" ? "default" : "secondary"}
                                        className={
                                            hackathon.status === "Open"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }
                                    >
                                        {hackathon.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {hackathon.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        {hackathon.timeLeft}
                                    </span>
                                    <Btn size="sm" className="shadow-sm">
                                        Register Now
                                    </Btn>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
