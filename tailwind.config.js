// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6C63FF',
          DEFAULT: '#5A54FF',
          dark: '#4338CA',
        },
        secondary: {
          light: '#FF5F7E',
          DEFAULT: '#FF3B5F',
          dark: '#E60028',
        },
        accent: {
          light: '#FFD54F',
          DEFAULT: '#FFB300',
          dark: '#FF8F00',
        },
        background: '#F3F4F6',
        foreground: '#FFFFFF',
        muted: '#6B7280',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        'outline': '0 0 0 3px rgba(90, 84, 255, 0.5)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 14px rgba(90, 84, 255, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '96': '24rem',
      },
      zIndex: {
        '-10': '-10',
        '60': '60',
        '70': '70',
        '80': '80',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

