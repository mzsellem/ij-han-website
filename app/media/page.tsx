import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function MediaPage() {
    return (
      <main>
        <Navbar/>
        <h1 className="text-3xl font-bold">Media</h1>
        <p>This is the Media page.</p>
        <Footer />
      </main>
    );
  }