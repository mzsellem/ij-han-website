'use client';

import React from 'react';
import Link from 'next/link';

export default function HomeNavbar() {
  return (
    <header className="w-full bg-gray-200 p-4">
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between ml-5 mr-5">
        <h1 className="text-3xl sm:text-5xl p-2">Justin "IJ" Han</h1>
        <ul className="flex flex-row sm:flex-row justify-center sm:justify-end sm:space-x-10 space-x-6 text-xl">
          <li><Link href="/"><span className="hover:underline">Home</span></Link></li>
          <li><Link href="/about"><span className="hover:underline">About</span></Link></li>
          <li><Link href="/media"><span className="hover:underline">Media</span></Link></li>
          <li><Link href="/engagements"><span className="hover:underline">Engagements</span></Link></li>
          <li><Link href="/contact"><span className="hover:underline">Contact</span></Link></li>

        </ul>
      </nav>
    </header>
  );
}