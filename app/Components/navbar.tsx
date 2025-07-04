import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
    <header className="flex w-full justify-between">
        <div className="ml-5">
            <h1 className="text-xl">Justin "IJ" Han | Conductor</h1>
        </div>
        <div className="mr-5">
            <ul className="flex justify-center space-x-10">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/engagements">Engagements</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </header>
    );
}