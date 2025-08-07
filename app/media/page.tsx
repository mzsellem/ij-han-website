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
    <div className="flex flex-wrap gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden w-[360px]"
        >
          <div className="">
          <iframe
            width="360"
            height="215"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </div>
          <p className="text-sm text-white p-2 bg-[#001f3f]">{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function MediaPage() {
  return (
    <main className="flex justify-center p-8 min-h-screen">
      <div className="min-h-screen px-4 py-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-white w-fit mx-auto pb-2">
          Media
        </h1>

        {/* Conducting Section */}
        <div className="mb-10 space-y-4">
          <h2 className="text-2xl">Conducting</h2>
          <VideoGrid videos={conductingVideos} />
        </div>

        {/* Piano Section */}
        <div className="space-y-4">
          <h2 className="text-2xl">Piano</h2>
          <VideoGrid videos={pianoVideos} />
        </div>
      </div>
    </main>
  );
}
