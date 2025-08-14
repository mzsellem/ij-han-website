import React from 'react';

const conductingVideos = [
  {
    id: 'YOUTUBE_VIDEO_ID_1',
    title: 'Mahler Symphony No. 2 – Finale excerpt with XYZ Orchestra',
  },
  {
    id: 'YOUTUBE_VIDEO_ID_2',
    title: 'Beethoven Symphony No. 5 – 1st Movement with ABC Philharmonic',
  },
  {
    id: 'YOUTUBE_VIDEO_ID_3',
    title: 'Contemporary piece "Waves of Time" premiere performance',
  },
];

const pianoVideos = [
  {
    id: 'YOUTUBE_VIDEO_ID_4',
    title: 'Ravel’s "Ondine" from *Gaspard de la nuit*',
  },
  {
    id: 'YOUTUBE_VIDEO_ID_5',
    title: 'Chopin Ballade No. 1 in G minor – Live recital',
  },
  {
    id: 'YOUTUBE_VIDEO_ID_6',
    title: 'Debussy’s "Clair de Lune" – Studio recording',
  },
];

function VideoGrid({ videos }: { videos: { id: string; title: string }[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden w-[360px] max-w-full"
        >
          {/* Aspect ratio container */}
          <div className="relative w-full pb-[56.25%]"> {/* 16:9 ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-white p-4 bg-black">{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function MediaPage() {
  return (
    <main className="p-8 min-h-screen">
      <div className="flex flex-col min-h-screen px-4 py-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-white w-fit mx-auto pb-2">
          Media
        </h1>
        {/* Conducting Section */}
        <div className="flex flex-col items-center mb-10 space-y-4">
          <h2 className="text-2xl">Conducting</h2>
          <VideoGrid videos={conductingVideos} />
        </div>

        {/* Piano Section */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl">Piano</h2>
          <VideoGrid videos={pianoVideos} />
        </div>
      </div>
    </main>
  );
}
