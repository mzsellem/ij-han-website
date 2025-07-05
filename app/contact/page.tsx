import React from 'react'; 

export default function ContactPage() {
    return (
      <main className="sm:ml-50 flex justify-center p-8 min-h-screen">
        <div className="flex-grow sm:w-2/3 w-full mx-auto flex flex-col items-center gap-y-4 text-xl mt-8">
          <h1 className="text-center text-3xl font-semibold mb-4">
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
        <h1 className="m-4">jhan719@live.com</h1>
        </div>
      </main>
    )
  }