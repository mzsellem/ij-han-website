import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex space-x-3 items-center text-[#333]">
        <li>
          <a
            href="https://www.youtube.com/@maestro.justinhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#FF0000] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5.2-3L10 9v6zm12-3c0-2.2-.2-3.6-.6-4.6-.3-.9-1-1.6-1.9-1.9C18.5 5 12 5 12 5s-6.5 0-7.5.5c-.9.3-1.6 1-1.9 1.9C2.2 8.4 2 9.8 2 12s.2 3.6.6 4.6c.3.9 1 1.6 1.9 1.9 1 .4 7.5.4 7.5.4s6.5 0 7.5-.4c.9-.3 1.6-1 1.9-1.9.4-1 .6-2.4.6-4.6z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/maestro.han2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#1877F2] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/maestro.han/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#E1306C] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jhan719/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0077B5] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 8h5v16H0V8zm7 0h4.8v2.3h.1c.7-1.3 2.4-2.6 5-2.6 5.4 0 6.4 3.4 6.4 7.8V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2s-3 2-3 4v7.8H7V8z" />
            </svg>
          </a>
        </li>
      </ul>   
      <div className="text-[#333] text-xs mt-4">
        <h1>Design by Marley Sellem</h1>
        <h1>
          &copy; {new Date().getFullYear()} 
        </h1>
      </div>
    </div>
  );
}
