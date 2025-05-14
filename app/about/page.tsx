import React from 'react';
import Header from '../Components/header'

export default function AboutPage() {
    return (
      <main className="p-8">
        <Header/>
        <h1 className="text-3xl font-bold">About Me</h1>
        <p>This is the About page.</p>
      </main>
    );
  }