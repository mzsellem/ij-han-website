import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function EngagementsPage() {
const events = [
  {
    title: 'Spring Concert',
    datetime: 'March 15, 2025 at 7:00 PM',
    description: 'Join us for a beautiful evening of classical choral music featuring works by Mozart and Rutter.',
    image: '/concert.jpg',
  },
  {
    title: 'Masterclass with Dr. Smith',
    datetime: 'April 10, 2025 at 3:00 PM',
    description: 'An interactive piano masterclass hosted by guest artist Dr. Linda Smith.',
    image: '/masterclass.jpg',
  },
  // 👉 Add more events here easily
  ];

    return (
      <main>
      <Navbar />
        <div className="min-h-screen px-4 py-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-white w-fit mx-auto pb-2">
          Upcoming Events
        </h1>
        <div className="space-y-10 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-opacity-10 p-6 border rounded-xl shadow-md text-white flex flex-col sm:flex-row sm:space-x-6 items-center"
            >
              {/* Image Div */}
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0 border rounded-2xl">
                <img
                  src={event.image}
                  alt={`${event.title} image`}
                  className="rounded-xl object-cover w-full h-48"
                />
              </div>

              {/* Text Content */}
              <div className="w-full sm:w-2/3">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-sm italic mb-4">{event.datetime}</p>
                <p className="text-base">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <Footer />
    </main>
    );
  }