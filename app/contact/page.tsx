import React from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

export default function ContactPage() {
    return (
      <main>
        <Navbar/>
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <p>This is the Contact page.</p>
        <Footer/>
      </main>
    );
  }