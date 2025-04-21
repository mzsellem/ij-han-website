import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className='w-full'>
        <nav>Sticky Navbar</nav>
      </header>
      <main>
        <p>Your page content goes here.</p>
      </main>
      <footer className='w-full'>
        <p>Sticky Footer</p>
      </footer>
    </div>
  );
}
