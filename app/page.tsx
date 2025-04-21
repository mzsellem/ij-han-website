import React from 'react';
import Header from './header';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <p>Your page content goes here.</p>
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
