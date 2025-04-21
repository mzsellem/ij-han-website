import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className='w-full'>
        <nav>
          <ul className='flex justify-around'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Media">Media</a></li>
            <li><a href="#Engagements">Engagements</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Your page content goes here.</p>
      </main>
      <footer className='w-full'>
        <ul className='flex justify-around p-5'>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#Instagram">Instagram</a></li>
            <li><a href="#LinkedIn">LinkedIn</a></li>
          </ul>
      </footer>
    </div>
  );
}
