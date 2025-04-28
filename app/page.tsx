import React from 'react';
import HomeNavbar from './home-navbar';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HomeNavbar />
      <main className="flex flex-col items-center justify-center mt-8"> {/* Added margin-top */}
        <div>
          <img src="ij-serious-baton.png" alt="Serious Baton" />
          <img src="ij-hold-piano.png" alt="Hold Piano" />
          <img src="ij-baton-head.png" alt="Baton Head" />
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
