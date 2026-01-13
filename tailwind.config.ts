import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Specification Color Palette
        primary: '#0066FF',
        accent: '#00D4FF',
        success: '#00C853',
        warning: '#FFA000',
        danger: '#D32F2F',
        navy: {
          dark: '#0A1628',
          medium: '#1A2F4A',
        },
        surface: {
          light: '#F7F9FC',
          white: '#FFFFFF',
        },
        text: {
          dark: '#1A1A2E',
          medium: '#64748B',
          light: '#B8C5D6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'heading': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'heading-sm': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'subheading': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'body-lg': ['20px', { lineHeight: '32px' }],
        'body': ['16px', { lineHeight: '26px' }],
        'body-sm': ['14px', { lineHeight: '22px' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
