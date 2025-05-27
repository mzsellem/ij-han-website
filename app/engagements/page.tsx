import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function EngagementsPage() {
    return (
      <main>
        <Navbar/>
        <h1 className="text-3xl font-bold">Engagements</h1>
        <p>This is the Engagements page.</p>
        <Footer />
      </main>
    );
  }