/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        beige: '#F4DFC8',
        grey: '#ededed',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
        'curved-gray': 'rgb(41,41,41)',
        primary: '#2F3841',
        dark: '#1D1F21',
        'p-gray': '#CBEBFF',
        'p-blue': '#33B1FF',
        split: '#60606080',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        pattern: 'url(/assets/pattern-2x-jpg.jpg)',
        card: 'linear-gradient(140deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.08) 24.51%, rgba(255, 255, 255, 0.05) 47.92%, rgba(255, 255, 255, 0.02) 77.08%, rgba(255, 255, 255, 0.00) 100%);',
        bulb: 'radial-gradient(800px circle at 100px 100px,rgba(255,255,255,0.06),transparent 40%)',
        'card-grad':
          'linear-gradient(145deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.07) 48.33%, rgba(255, 255, 255, 0.05) 67.91%, rgba(255, 255, 255, 0.03) 100%);',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
        'gradient-blue':
          ' linear-gradient(192.02deg, #40C9FF 23.44%, rgba(89, 69, 166, 0.893336) 72.03%, rgba(254, 217, 24, 0.9) 88%);',
        ecommerce: 'url(./assets/ecommerce-app.png)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush-3.png')",
        pattern: './assets/pattern-2x-svg.svg',
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        dashboard: "url('./assets/dashboard.png')",
        blog: "url('./assets/blog.png')",
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
};
