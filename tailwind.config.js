/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xz: "320px",
        xy: "376px",
        xx: "415px",
        xs: "480px",
        xm: "575px",
        ss: "620px",
        sm: "768px",
        sd: "991px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      boxShadow: {
        'inner-amber': 'inset 0 0 20px #BCEC03',
        'hover-amber': '0 4px 15px #BCEC03',
      },
      colors: {
        'color-black': '0,0,0',
        'color-white': '255,255,255',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 100%)',
      },
      opacity: {
        '30': '0.3',
      },
      backdropInvert: {
        15: '.15',
        25: '.25',
        50: '.50',
        75: '.75',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#04481F",
          "secondary": "#222222",
          "accent": "#030403",
          "neutral": "#1B1464",
          "base-100": "#12142B",
          // Добавленные цвета
          "info": "#1B1464",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "light": "#ffffff",   // Светлый цвет
          "dark": "#333333",     // Темный цвет
          "gray-100": "#F7FAFC",
          "gray-500": "#A0AEC0",
          "gray-900": "#1A202C",
        },
      },
    ],
  },
}
