import React from 'react';

export default function AboutPage() {
    return (
      <main className="flex items-center justify-center sm:ml-64 px-6 py-10 min-h-screen">
        <div className="flex flex-col items-center gap-y-4 text-xl sm:text-left text-center px-4">
          <div className="sm:flex-row flex flex-col sm:space-x-17 space-y-6">
            <div className="flex justify-center sm:w-1/2 w-full">
              <img
              src="ij-mozart.png"
              alt="Cheeky Picture of Justin"
              className="object-cover rounded-2xl max-w-[80%] sm:max-w-full"
            />
            </div>
            <div className="flex flex-col justify-center items-center sm:w-1/2 space-y-5">
              <h1 className="text-left text-3xl font-semibold mb-6 border-b-2 border-white w-1/3 pb-2 inline-block">
              About Me
              </h1>
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
        </div>
      </main>
    );
  }