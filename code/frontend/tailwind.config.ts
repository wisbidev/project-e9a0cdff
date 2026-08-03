import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF4E8',
        surface: '#FFFDF7',
        border: '#EDE2CE',
        text: '#2F2116',
        'text-muted': '#7C6350',
        primary: '#D97706',
        'primary-hover': '#B45309',
        'primary-soft': '#F6E3C4',
        focus: '#D97706',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        display: 'clamp(3rem, 9vw, 5.25rem)',
        h2: 'clamp(1.9rem, 5vw, 2.4rem)',
        lead: 'clamp(1.1rem, 2.6vw, 1.35rem)',
        item: '1.18rem',
        base: '1rem',
        label: '1rem',
      },
      borderRadius: {
        focus: '6px',
        md: '16px',
        lg: '24px',
        full: '999px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(47, 33, 22, 0.18)',
        btn: '0 8px 20px -10px rgba(217, 119, 6, 0.55)',
        'btn-hover': '0 12px 26px -10px rgba(180, 83, 9, 0.55)',
        'row-hover': '0 8px 18px -12px rgba(47, 33, 22, 0.22)',
      },
      transitionDuration: {
        fast: '0.25s',
        load: '0.9s',
        steam: '3.2s',
      },
      spacing: {
        'space-1': '4px',
        'space-4': '16px',
        'space-5': '20px',
        'space-6': '24px',
        'space-8': '32px',
        'space-10': '40px',
        'space-11': '44px',
        'space-12': '48px',
        'space-14': '56px',
        'space-16': '64px',
        'space-20': '80px',
        'space-24': '96px',
        'space-27': '108px',
        'space-28': '110px',
      },
      maxWidth: {
        hero: '760px',
        menu: '640px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'steam': {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0px) scaleY(1)' },
          '50%': { opacity: '0.9', transform: 'translateY(-6px) scaleY(1.15)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out forwards',
        'steam': 'steam 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
