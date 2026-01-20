import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CertifyCloud Brand Identity System - Primary Colors
        'brand-blue': '#0066FF',
        'brand-dark': '#1E293B',
        'brand-light': '#F1F5F9',
        
        // Primary action color
        primary: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          active: '#0041A3',
          light: '#EBF4FF',
        },
        
        // Status Colors - Traffic Light System
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
          dark: '#059669',
          veryLight: '#ECFDF5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#D97706',
          veryLight: '#FFFBEB',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#DC2626',
          veryLight: '#FEF2F2',
        },
        
        // Supporting Colors
        info: '#0EA5E9',
        
        // Navy (dark backgrounds)
        navy: {
          dark: '#0F172A',
          medium: '#1E293B',
          light: '#334155',
        },
        
        // Surfaces
        surface: {
          light: '#F1F5F9',
          white: '#FFFFFF',
        },
        
        // Text hierarchy
        text: {
          primary: '#0F172A',
          secondary: '#334155',
          tertiary: '#64748B',
          disabled: '#CBD5E1',
          light: '#CBD5E1',
          medium: '#64748B',
          dark: '#0F172A',
        },
        
        // Slate scale for neutrals
        slate: {
          50: '#F1F5F9',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
          700: '#1E293B',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Brand Identity Typography Scale
        'h1': ['36px', { lineHeight: '43px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['30px', { lineHeight: '39px', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '30px', fontWeight: '600' }],
        'h5': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-lg': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '21px', fontWeight: '400' }],
        'micro': ['12px', { lineHeight: '17px', letterSpacing: '0.02em', fontWeight: '400' }],
        // Display sizes for hero
        'display': ['56px', { lineHeight: '64px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['36px', { lineHeight: '44px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'heading-sm': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'subheading': ['28px', { lineHeight: '36px', fontWeight: '600' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      borderRadius: {
        'brand': '8px',
        'card': '12px',
        'badge': '16px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
        'button': '0 4px 14px rgba(0, 102, 255, 0.4)',
        'status-valid': '0 4px 14px rgba(16, 185, 129, 0.3)',
        'status-warning': '0 4px 14px rgba(245, 158, 11, 0.3)',
        'status-danger': '0 4px 14px rgba(239, 68, 68, 0.3)',
        'glow': '0 0 40px rgba(0, 102, 255, 0.3)',
        'glow-lg': '0 0 80px rgba(0, 102, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #0066FF 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 102, 255, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
