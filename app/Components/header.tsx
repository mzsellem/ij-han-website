import React from 'react';

export default function Navbar() {
    return (
    <header className="w-full">
            <nav>
            <ul className="flex justify-around">
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