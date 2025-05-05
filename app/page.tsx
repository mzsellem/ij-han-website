import React from 'react';
import HomeNavbar from './home-navbar';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HomeNavbar />
      <main className="flex flex-col sm:flex-row items-start justify-center gap-8 px-6 sm:px-12 py-8 w-full max-w-7xl">
        {/* Left column: Images */}
        <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:space-x-8 space-y-8 sm:space-y-0 items-center sm:items-start sm:w-1/2 w-full">
          <img src="ij-serious-baton.png" alt="Serious Baton" className="rounded-2xl w-64 shrink-0" />
          <img src="ij-hold-piano.png" alt="Hold Piano" className="rounded-2xl w-64 shrink-0" />
          <img src="ij-baton-head.png" alt="Baton Head" className="rounded-2xl w-64 shrink-0" />
        </div>


        {/* Right column: Text content */}
        <div className="sm:w-1/2 w-full text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">About the Series</h2>
          <p className="mb-4">
            This photo series explores the emotional landscape of a conductor in rehearsal and performance.
          </p>
          <p className="mb-4">
            Each image captures an intimate moment of intensity, vulnerability, or connection.
          </p>
          <p>
            The visual narrative invites the viewer to consider the hidden dynamics behind musical leadership.
          </p>
        </div>
      </main>

      <footer className="w-full">
        <ul className="flex justify-center space-x-2">
          <li><a href="#Facebook">Facebook</a></li>
          <li><a href="#Instagram">Instagram</a></li>
          <li><a href="#LinkedIn">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}