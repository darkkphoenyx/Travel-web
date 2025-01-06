import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    fontFamily: {
      sans: ['var(--font-jost)'],
      cursive: ['var(--font-satisfy)'],
      serif: ['var(--font-playfair)'],
      // sans: ['Jost', 'sans-serif'],
      // cursive: ['Satisfy', 'cursive'],
      // serif: ['Playfair Display', 'serif'],
      bootstarp: ['bootstrap-icons'],
    },
    container: {
      center: true,
      padding: {
          DEFAULT: '12px',
          sm: '12px',
          lg: '1rem',
          xl: '1rem',
          '2xl': '5rem',
          '3xl': '5rem'
      },
    },
    fontSize:  {
      xxs: "8px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      "2md": "20px",
      lg: "24px",
      xl: "30px",
      "2xl": "35px",
      "3xl": ["40px", { lineHeight: "1.5" }],
      "4xl": "48px",
      "5xl": "56px",
      "6xl": "72px",
      "7xl": "80px"
    },
    extend: {
      backgroundImage: {
        'footer-border': "linear-gradient(90deg, rgba(53, 53, 53, 0) 0%, rgba(53, 53, 53, 0.8) 48.96%, rgba(53, 53, 53, 0) 100%)",
      },
      colors: {
        "gradient-1" : 'linear-gradient(180deg, #FFF4E2 0%, rgba(255, 255, 255, 0) 100%)',
        primary:{
          "1" : "#E8604C",
          "2" : "#eb7766",
          "3" : "#F7DCB5",
        },
        secondary: {
          "1" : "#FF7C5B",
          "2" : "#FFB29E"
        },
        dark: {
          "base": "#1E1E1E",
          "1" : "#030415",
          "2" : "#353535",
          "3" : "#5B5B5B",
          "4" : "#7B7B7B",
          "5" : "#EBEBEB",
          "6" : "#F3F3F3"
        },
        status: {
          "info" : "#219FFF",
          "info-shad" : "#E9F6FF",
          "success" : "#17BD8D",
          "success-shad" : "#E9FBF6",
          "warning" : "#FFC233",
          "warning-shad" : "#FFF9EB",
          "danger" : "#F53D6B",
          "danger-shad" : "#FFE3EB",
        },
        stock: {
          "1" : "#DDDDDD",
          "2" : "#EEEEEE",
        },
        gradient : {
          "1" : 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.12) 100%)'
        }
      },
      zIndex: {
        'minus': '-1',
        1: '1',
        2: '2',
        3: '3',
        999: '999',
      },
      lineHeight: {
        '1' : '1',
        '1.1' : '1.1',
        '1.2' : '1.2',
        '1.3' : '1.3',
        '1.35' : '1.35',
        '1.4' : '1.4',
        '1.45' : '1.45',
        '1.5' : '1.5',
        '1.6' : '1.6',
        '1.7' : '1.7',
        '1.8' : '1.8',
        '1.9' : '1.9',
      },
      spacing: {
        'base': '30px',
        '17': '70px',
        '30': '120px',
        'right-container' : 'calc((100% - 1176px) / 2)',
      },
      boxShadow: {
        'custom-1': '8px 5px 45px rgba(0, 0, 0, 0.08)',
        'custom-2': '4px 3px 40px rgba(16, 33, 34, 0.06)'
      },
      keyframes: {
        paluse: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        paluse: '2s ease-in-out 0.5s infinite',
      },
      transformOrigin: {
        'top-left-1/3-3/4': '60% 121%',
        'left-center': 'left center',
      },
    },
  },
  plugins: [],
}
export default config
