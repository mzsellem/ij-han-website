import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
<footer className="w-full">
  <h1 className="font-bold mb-2">Connect</h1>
<ul className="flex justify-center items-center space-x-4 text-xl">
  <li>
    <a href="https://www.youtube.com/@justinhan7547">
      <Image
      src="/yt-logo.png"
      alt="Youtube Icon"
      width={80}
      height={80}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/maestro.han2">
      <Image
      src="/fb-logo.png"
      alt="Facebook Icon"
      width={30}
      height={30}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/maestro.han/?fbclid=IwY2xjawKjLBZleHRuA2FlbQIxMABicmlkETFjSEViMnFsdHNKN2tNVnJrAR4g2iIz6NR8NQ24tUweAcIyJXjEXojYSeoba3bEFn1DH3i7uYhsd0S49dMXgA_aem_pcww02QSUE0ix4HMOnvKdA#">
      <Image
      src="/insta-logo.png"
      alt="Facebook Icon"
      width={30}
      height={30}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/jhan719/">
      <Image
      src="/li-logo.png"
      alt="Facebook Icon"
      width={80}
      height={80}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
</ul>
</footer>
    )
}