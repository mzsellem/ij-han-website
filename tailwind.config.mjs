// tailwind.config.js
export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if using Next.js app directory
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  };
  