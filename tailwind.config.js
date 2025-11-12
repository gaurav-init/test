// tailwind.config.js — tokens calibrated to retroui.dev
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#f5ece7',
          soft: '#ece1d8',
          card: '#ffffff',
          ink: '#000000',
          muted: '#4f4640',
          yellow: '#ffd900',
          pink: '#ff7eb6',
          lime: '#bef264',
          blue: '#7cd3ff',
          orange: '#ff8a3d',
          purple: '#c89bff',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        retro: '3px 3px 0 0 #000000',
        'retro-md': '4px 4px 0 0 #000000',
        'retro-lg': '6px 6px 0 0 #000000',
      },
      borderRadius: {
        retro: '0px',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        shine: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '-100%' },
        },
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'spin-fast': 'spin 8s linear infinite',
        bounce: 'bounce 13s infinite',
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};
