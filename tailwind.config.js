/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark_gray_one: '#212529',
        dark_gray_two: '#343A40',
        dark_gray_three: '#495057',
        middle_gray_one: '#6C757D',
        middle_gray_two: '#ADB5BD',
        middle_gray_three: '#CED4DA',
        light_gray_one: '#DEE2E6',
        light_gray_two: '#E9ECEF',
        light_gray_three: '#F8F9FA',
        title: '#FF006B',
        degree: '#FFC801',
      },
    },
  },
  plugins: [],
};
