import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] items-center">
        <Navbar/>
        <main className="flex-grow sm:w-2/3 mx-auto flex flex-col items-center gap-y-4 text-xl mt-8">
          <h1 className="text-center text-3xl font-semibold mb-4 border-b-2 border-white w-1/2 pb-2 inline-block">
            About Me
          </h1>
          <div className="sm:flex-row flex flex-col items-center sm:space-x-10 space-y-6">
            <div className="flex w-1/2">
              <img
              src="ij-mozart.png"
              alt="Relax Picture of Justin"
              className={`object-cover rounded-2xl`}
            />
            </div>
            <div className="w-1/2 space-y-5">
              <p>
                A native of both South Korea and Georgia, Mr. Justin Han is a professional pianist, conductor, singer, 
                and violinist in the Atlanta area. Justin is a graduate of Georgia State University, where he earned a 
                double Master’s degree in choral conducting and piano performance and was a recipient of the Robert Shaw
                Choral Scholar Award and Stegner Piano Scholarship. 
              </p>
              <p>
                Before joining Emory Presbyterian Church in January 2020, Justin held music director and organist positions
                at Johns Creek Presbyterian Church, Commerce Presbyterian Church, Greensboro First United Methodist Church,
                and Our Hope Metropolitan Community Church. He also currently works as a piano instructor at Silva Piano Studios
                in Marietta, GA. 
              </p>
              <p>
                When he isn’t doing music, Justin enjoys cooking international cuisines and playing with his two cats, Presto 
                and Melody.
              </p>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }