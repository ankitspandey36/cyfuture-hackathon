import React from 'react';
import { Card } from './components/ui/Card';
import { Btn } from './components/ui/Btn';


const sessions = [
    {
        title: 'Cracking HR Interviews',
        speaker: 'Jane Doe (Google)',
        date: 'June 15, 2025',
        time: '4:00 PM IST'
    },
    {
        title: 'Resume Masterclass',
        speaker: 'John Smith (Amazon)',
        date: 'June 20, 2025',
        time: '7:00 PM IST'
    },
];

const Sessions = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">Speaker Sessions</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {sessions.map((session, index) => (
                    <Card key={index} className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                        <p className="text-muted-foreground mb-1"><strong>Speaker:</strong> {session.speaker}</p>
                        <p className="text-muted-foreground mb-1"><strong>Date:</strong> {session.date}</p>
                        <p className="text-muted-foreground mb-4"><strong>Time:</strong> {session.time}</p>
                        <Btn size="sm">Register</Btn>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Sessions;
