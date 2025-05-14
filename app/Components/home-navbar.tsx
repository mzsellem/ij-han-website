'use client';

import React from 'react';
import Link from 'next/link';

export default function HomeNavbar() {
  return (
    <header className="w-full bg-gray-200 p-4">
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between ml-5 mr-5">
        <h1 className="text-3xl sm:text-5xl p-2">Justin "IJ" Han</h1>
        <ul className="flex flex-row sm:flex-row justify-center sm:justify-end sm:space-x-10 space-x-6 text-xl">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/media" className="hover:underline">Media</Link></li>
          <li><Link href="/engagements" className="hover:underline">Engagements</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}