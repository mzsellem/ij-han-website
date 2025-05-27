import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
<footer className="w-full">
<ul className="flex justify-center space-x-2 text-xl">
  <li>
    <a href="https://www.facebook.com/maestro.han2">
      <Image
      src="/fb-icon.svg"
      alt="Facebook Icon"
      width={40}
      height={40}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/maestro.han/?fbclid=IwY2xjawKjLBZleHRuA2FlbQIxMABicmlkETFjSEViMnFsdHNKN2tNVnJrAR4g2iIz6NR8NQ24tUweAcIyJXjEXojYSeoba3bEFn1DH3i7uYhsd0S49dMXgA_aem_pcww02QSUE0ix4HMOnvKdA#">
      <Image
      src="/insta-2.svg"
      alt="Facebook Icon"
      width={40}
      height={40}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/jhan719/">
      <Image
      src="/linkedin.svg"
      alt="Facebook Icon"
      width={40}
      height={40}
      style={{ objectFit: 'cover' }}
      />
    </a>
  </li>
</ul>
</footer>
    )
}