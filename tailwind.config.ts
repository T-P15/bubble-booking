import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          'pale-blue': '#dee8ff',
          'dark-pale-blue': '#172a52',
          'blue': '#b3cdfe',
          'dark-blue': '#0f2441',
        },
        secondary: {
          'pale-purple': '#f2e7fd ',
          'dark-pale-purple': '#2d253c',
          'violet': '#cfd5ff',
          'dark-violet': '#1e1f3e',
          'white-blue': '#e5f1ff',
          'dark-white-blue': '#1a2b3c'
        },
        tertiary: {
          'baby-pink': '#f9d3f4',
          'dark-baby-pink': '#7a3257',
          'purple': '#bac7fb',
          'dark-purple': '#3c4d7a'
        }
      }
    },
  },
  plugins: [    require('@tailwindcss/typography'),
],
} satisfies Config;
