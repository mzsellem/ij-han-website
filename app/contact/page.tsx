import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function ContactPage() {
    return (
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Navbar/>
        <main className="sm:w-2/3 w-full flex flex-col justify-center items-center gap-y-4 text-xl mt-16">
          <h1 className="text-3xl font-bold mb-4 border-b-1 border-white w-full pb-4 inline-block text-center">
            Get in Touch
          </h1>
          <div className="sm:w-1/2 w-full overflow-hidden relative rounded-2xl">
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