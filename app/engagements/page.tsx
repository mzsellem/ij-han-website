import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function EngagementsPage() {
const events = [
  {
    title: 'Spring Concert',
    datetime: 'March 15, 2025 at 7:00 PM',
    description: 'Join us for a beautiful evening of classical choral music featuring works by Mozart and Rutter.',
  },
  {
    title: 'Masterclass with Dr. Smith',
    datetime: 'April 10, 2025 at 3:00 PM',
    description: 'An interactive piano masterclass hosted by guest artist Dr. Linda Smith.',
  },
  // 👉 Add more events here easily
  ];

    return (
      <main>
        <Navbar/>
      <div className="min-h-screen px-4 py-8 font-[family-name:var(--font-geist-sans)] flex flex-col items-center">
        <h1 className="text-center text-3xl font-semibold mb-4 border-b-2 border-white w-1/2 pb-2 inline-block">
          Upcoming Events
        </h1>
        <div className="space-y-8 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-md text-black">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm italic mb-4">{event.datetime}</p>
              <p className="text-base">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
    );
  }