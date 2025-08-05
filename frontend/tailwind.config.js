/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {  
      },
      fontFamily: {
        lora: ['Lora', 'Marcellus', 'serif'],
        marcellus: ['Marcellus', 'Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
