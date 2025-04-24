import React from 'react';
import HomeNavbar from './home-navbar';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HomeNavbar />
      <main className='flex flex-col items-center justify-center'>
        <div>
          <img src="ij-serious-conductor.png"></img>
          <img src="ij-holds-piano.png"></img>
          <img src="ij-baton-head.png"></img>
        </div>
      </main>
      <footer className='w-full'>
        <ul className='flex justify-around'>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#Instagram">Instagram</a></li>
            <li><a href="#LinkedIn">LinkedIn</a></li>
          </ul>
      </footer>
    </div>
  );
}
