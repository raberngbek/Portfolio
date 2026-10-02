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
          DEFAULT: '#0B0F17', // Rich dark editorial canvas
          darker: '#070A10',
          subtle: '#101624',
        },
        surface: {
          DEFAULT: '#121826', // Clean dark surface
          hover: '#192236',
          elevated: '#172033',
          card: '#111726',
        },
        border: {
          DEFAULT: '#1E293B', // Clean subtle hairline border
          subtle: '#26334D',
          light: '#334155',
        },
        text: {
          primary: '#F8FAFC',   // Crisp, high-contrast headline text
          secondary: '#94A3B8', // Soft readable secondary copy
          muted: '#64748B',     // Captions, metadata, tags
        },
        accent: {
          DEFAULT: '#38BDF8',   // Refined subtle sky blue
          hover: '#0EA5E9',
          subtle: 'rgba(56, 189, 248, 0.1)',
          emerald: '#10B981',   // Online/availability status
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
        'desktop': '1440px',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
      }
    },
  },
  plugins: [],
}
