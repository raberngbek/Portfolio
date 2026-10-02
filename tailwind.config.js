/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0F17',
          darker: '#070A0F',
          subtle: '#111726',
        },
        surface: {
          DEFAULT: '#141C2E',
          hover: '#1B253D',
          elevated: '#202B47',
          card: '#121826',
        },
        border: {
          DEFAULT: '#1E293B',
          muted: '#28354E',
          focus: '#38BDF8',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        accent: {
          DEFAULT: '#38BDF8', // Cyan/Sky
          hover: '#0EA5E9',
          purple: '#818CF8', // Indigo
          emerald: '#10B981', // Green for status/availability
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'desktop': '1440px',
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(56, 189, 248, 0.15)',
        'glow-lg': '0 0 40px -10px rgba(56, 189, 248, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
