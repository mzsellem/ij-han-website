import React from 'react';

export default function UpcomingPage() {
  function isUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

const events = [
  {
    title: 'Coro Vocati Concert',
    datetime: 'December 13, 2025 at 7:00 PM',
    role: 'Ensemble Singer',
    location: 'TBA',
    // description: '',
    image: '/concert.jpg',
  },
  {
    title: 'Vivaldi’s Magnificat and Bach`s BWV 62',
    datetime: 'December 14, 2025 at 11:00 AM',
    role: 'Conductor',
    location: 'Emory Presbyterian Church', 
    // description: '',
    image: '/masterclass.jpg',
  },
  {
    title: 'The Gloria That Got Away: Vivaldi`s Gloria RV 588 & Handel`s Dixit Dominus',
    datetime: 'December 14, 2025 at 4:00 PM',
    role: 'Conductor',
    location: 'First Baptist Church of Athens', 
    description: 'https://athensmasterchorale.org/concerts/the-gloria-that-got-away',
    image: '/masterclass.jpg',
  },
  {
    title: 'Sacred & Symphonic: Haydn`s Te Deum & Mozart`s Great Mass in C minor',
    datetime: 'May 2, 2026 at 7:00 PM',
    role: 'Conductor',
    location: 'Hodgson Concert Hall', 
    description: 'https://athensmasterchorale.org/concerts/sacred-symphonic',
    image: '/masterclass.jpg',
  },
  {
    title: 'Coro Vocati Concert',
    datetime: 'May 3, 2026 at 3:00 PM at 11:00 AM',
    role: 'Ensemble Singer',
    location: 'TBA', 
    // description: '',
    image: '/masterclass.jpg',
  },
  ];

    return (
    <main className="flex justify-center p-14 min-h-screen">
      <div className="min-h-screen px-4 py-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-[white] w-fit mx-auto pb-2">
        Upcoming
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
              <h2 className="text-2xl font-semibold">{event.title}</h2>
              <p className="text-sm italic">{event.datetime}</p>
              <p className="text-sm italic mb-2">{event.location}</p>
              <p className="text-sm italic mb-2">{event.role}</p>
              <p className="text-base">{event.description && (
                isUrl(event.description) ? (
                  <a
                    href={event.description}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base underline text-blue-300 hover:text-blue-400"
                  >
                    {event.description}
                  </a>
                ) : (
                  <p className="text-base">{event.description}</p>
                )
              )}
            </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
    );
  }