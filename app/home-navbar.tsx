import React from 'react';

export default function HomeNavbar() {
    return (
    <header className='w-full'>
            <nav>
            <h1 className='text-3xl'>Justin "IJ" Han</h1>
            <ul className='flex justify-around'>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Media">Media</a></li>
                <li><a href="#Engagements">Engagements</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>
    </header>
    );
}