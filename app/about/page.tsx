import React from 'react';

export default function AboutPage() {
    return (
      <main className="flex items-center justify-center min-h-screen p-20">
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
              <h1 className="text-center text-3xl font-semibold mb-6 border-b-2 border-white w-fit pb-2 inline-block">
              About Me
              </h1>
              <p>
                Known for his thoughtful musicianship and interpretive depth, Justin Han has been praised by EarRelevant
                for his “well-paced and sensitive reading” of Mozart. He is an American Prize Finalist conductor, pianist,
                and singer based in Atlanta. He serves as the Artistic Director of the Athens Master Chorale and Director 
                of Music & Organist at Emory Presbyterian Church.
              </p>
              <p>
                Beyond music, he is a multidisciplinary individual with a strong foundation in the sciences and is also a
                Lecturer of Biology at Georgia State University Perimeter College. With a deep love for Baroque music and the
                works of Mozart and Ravel, Justin finds joy in bringing music to life—whether conducting, accompanying, or 
                performing. In June 2023, he presented an all-Mozart recital, performing as a soloist in Piano Concerto No. 
                21. He has appeared as a guest conductor for the Alpharetta Symphony Orchestra and frequently sings with 
                professional ensembles such as the Kinnara Ensemble and Coro Vocati. 
              </p>
              <p>
                A sought-after accompanist, he regularly collaborates with K–12 schools, universities, and professional 
                performers. His conducting repertoire includes major choral-orchestral works such as Handel’s Messiah and 
                Dixit Dominus, J.S. Bach’s Magnificat, Vivaldi’s Gloria, Mozart’s Exsultate, jubilate, Rutter’s Gloria, and 
                Corigliano’s Fern Hill. Justin has also served as a clinician for high school and university choirs, 
                including those at the University of North Georgia, Georgia Institute of Technology, the Georgia Youth 
                Symphony Orchestras, and Atlanta Young Singers. He has participated in masterclasses with renowned conductors 
                and pedagogues including Joseph Flummerfelt, Andrew Megill, Eugene Rogers, Jeffrey Douma, Jason Max Ferdinand, 
                Amanda Quist, and William Weinert.
              </p>
              <p>
                He holds master’s degrees in Choral Conducting, Piano Performance, and Medical Sciences from Georgia State 
                University, where he was awarded the Robert Shaw Choral Scholar Award and the Stegner Piano Scholarship. Justin 
                views music as a dynamic force that bridges the vast and the personal, offering a unique way to express what 
                words cannot. He believes that the essence of music lies in the authenticity of its performers, with the human 
                condition being the key element that gives depth to the art.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }