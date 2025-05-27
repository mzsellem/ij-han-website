import React from 'react';
import Navbar from '../Components/navbar'

export default function AboutPage() {
    return (
      <main>
        <Navbar/>
        <h1 className="text-3xl font-bold">About Me</h1>
        <p>This is the About page.</p>
      </main>
    );
  }