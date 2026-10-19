/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        tn: {
          ivory: '#F3ECE4',
          taupe: '#8E7D6E',
          dusty: '#754E4E',
          burgundy: '#704A4B',
          'burgundy-hover': '#593A3B',
          cream: '#F8F4ED',
          nav: '#805D5A',
          charcoal: '#625F5F',
          blush: '#E5BDB4',
          beige: '#DED3C7',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 8px)',
        '2xl': 'calc(var(--radius) + 16px)',
        '3xl': 'calc(var(--radius) + 24px)',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(15, 184, 138, 0.35)',
        'glow-secondary': '0 0 25px -5px rgba(244, 123, 63, 0.35)',
        'card-elevated': '0 10px 30px -10px rgba(11, 19, 43, 0.08), 0 4px 6px -2px rgba(11, 19, 43, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(11, 19, 43, 0.16), 0 8px 10px -4px rgba(11, 19, 43, 0.06)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};