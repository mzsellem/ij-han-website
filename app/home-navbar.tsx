import React from 'react';

export default function HomeNavbar() {
  return (
    <header className="w-full bg-gray-200 p-4">
      <nav className="flex flex-col sm:flex-col items-center">
        <h1 className="text-3xl sm:text-4xl mb-2">Justin "IJ" Han</h1>
        <ul className="flex flex-row sm:flex-row justify-center sm:justify-end sm:space-y-0 sm:space-x-10 space-x-2">
          <li><a href="#Home" className="hover:underline">Home</a></li>
          <li><a href="#About" className="hover:underline">About</a></li>
          <li><a href="#Media" className="hover:underline">Media</a></li>
          <li><a href="#Engagements" className="hover:underline">Engagements</a></li>
          <li><a href="#Contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}