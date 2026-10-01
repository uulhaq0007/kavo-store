/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '1.5rem' },
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1290px', '2xl': '1290px' },
    },
    extend: {
      colors: {
        // Driven by CSS variables so a single wrapper swaps the whole storefront.
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'brand-dark': 'rgb(var(--brand-dark) / <alpha-value>)',
        'brand-soft': 'rgb(var(--brand-soft) / <alpha-value>)',
        bar: 'rgb(var(--bar) / <alpha-value>)',
        'bar-ink': 'rgb(var(--bar-ink) / <alpha-value>)',
        ink: '#141414',
        body: '#74787c',
        line: '#e3e3e3',
        mist: '#f6f6f7',
      },
      fontFamily: { sans: ['Jost', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 6px 30px rgba(20,20,20,.08)',
        pop: '0 14px 44px rgba(20,20,20,.14)',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        slideIn: 'slideIn .35s ease-out',
      },
    },
  },
  plugins: [],
}
