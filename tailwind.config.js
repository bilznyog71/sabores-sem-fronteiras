/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EADBC7',
          400: '#DEC5A8',
        },
        charcoal: {
          900: '#141211',
          800: '#1C1917',
          700: '#292524',
          600: '#44403C',
          500: '#57534E',
          400: '#78716C',
          300: '#A8A29E',
        },
        wine: {
          900: '#470D14',
          800: '#64141F',
          700: '#7B1B27',
          600: '#922230',
          500: '#AD2D3E',
          100: '#F8E8EB',
          50: '#FDF2F4',
        },
        terracotta: {
          700: '#8A321E',
          600: '#A33E27',
          500: '#C04F34',
          100: '#FBEBE7',
        },
        gold: {
          600: '#9C7A33',
          500: '#BA9444',
          400: '#CFA755',
          300: '#DFC07B',
          100: '#F7F0DF',
        },
        olive: {
          700: '#3D492F',
          600: '#4E5E3C',
          500: '#64784D',
          100: '#EFF3EA',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(28, 25, 23, 0.08), 0 0 1px 1px rgba(28, 25, 23, 0.04)',
        'book': '0 25px 50px -12px rgba(20, 18, 17, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'float': '0 30px 60px -12px rgba(123, 27, 39, 0.18), 0 10px 25px -5px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
