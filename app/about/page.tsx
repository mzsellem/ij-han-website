import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] items-center">
        <Navbar/>
        <main className="flex-grow sm:w-2/3 w-full mx-auto flex flex-col items-center gap-y-4 text-xl mt-8">
          <h1 className="text-center text-3xl font-semibold mb-4 border-b-2 border-white w-1/2 pb-2 inline-block">
            About Me
          </h1>
        </main>
        <Footer/>
      </div>
    );
  }