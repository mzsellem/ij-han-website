import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] items-center">
        <Navbar/>
        <main className="flex-grow sm:w-2/3 w-full mx-auto flex flex-col items-center gap-y-4 text-xl mt-8">
          <h1 className="text-center text-3xl font-semibold mb-4 border-b-2 border-white w-1/2 pb-2 inline-block">
            Get in Touch
          </h1>
          <div className="sm:w-1/3 w-1/2 overflow-hidden relative rounded-2xl">
            <img
              src="ij-chill.png"
              alt="Relax Picture of Justin"
              className={`w-full h-full object-cover rounded-2xl"
              }`}
            />
          </div>
        <h1 className="mb-4">jhan719@live.com</h1>
        </main>
        <Footer/>
      </div>
    );
  }