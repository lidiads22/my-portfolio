/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        typewriter: {
          '0%':   { width: '0ch' },
          '100%': { width: '20ch' },    // ← set this to roughly your text’s length
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%':       { borderColor: 'currentColor' },
        },
      },
      animation: {
        float:      'float 4s ease-in-out infinite',
        typewriter: 'typewriter 3s steps(20,end) forwards, blink .75s step-end infinite',
      },
      fontFamily: {
        // override the default sans – you can name it anything
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        // you could also add others:
        serif: ["Merriweather", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
