import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
    <header className="w-full">
            <nav>
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/engagements">Engagements</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            </nav>
    </header>
    );
}