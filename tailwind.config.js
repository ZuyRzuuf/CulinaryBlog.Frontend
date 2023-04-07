/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Lora', 'serif'],
      'sans': ['Montserrat', 'sans'],
      'mono': ['Roboto Mono', 'mono'],
    },
    colors: {
      // palette 1 (Secondary background or text)
      // palette 3 (Secondary background or text)
      'light-gray': '#F5F5F5',
      // palette 1 (Secondary background or text)
      // palette 3 (Buttons and links)
      'olive-green': '#8BC34A',
      // palette 1 (Accents and buttons)
      // palette 2 (Accents and headings)
      'warm-orange': '#FFA726',
      // palette 2 (Headings and text)
      'dark-brown': '#5D4037',
      // palette 2 (Buttons and calls-to-action)
      'deep-red': '#D32F2F',
      // palette 3 (Accents and headings)
      'soft-pink': '#FFCDD2',
    },
    extend: {
      backgroundColor: {
        // Palette 1: Modern & Fresh
        // Palette 2: Warm & Earthy
        // Palette 3: Playful & Sweet
        'palette3-white': '#FFFFFF',
      },
      textColor: {
        // Palette 1: Modern & Fresh
        'palette1-light-gray': '#F5F5F5',
        'palette1-warm-orange': '#FFA726',
        'palette1-olive-green': '#8BC34A',
        // Palette 2: Warm & Earthy
        'palette2-dark-brown': '#5D4037',
        'palette2-warm-orange': '#FFA726',
        'palette2-deep-red': '#D32F2F',
        // Palette 3: Playful & Sweet
        'palette3-light-gray': '#F5F5F5',
        'palette3-soft-pink': '#FFCDD2',
        'palette3-olive-green': '#8BC34A',
      }
    },
  },
  plugins: [],
}

