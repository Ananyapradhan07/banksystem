/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background colors
        'background-50': '#F6FBF8',
        'background-100': '#E6F7ED',
        'background-200': '#D6F3E3',
        'background-300': '#C6EED8',
        'background-400': '#B5EACD',
        'background-500': '#A5E5C2',
        'background-600': '#95E0B7',
        'background-700': '#85DBAC',
        'background-800': '#74D7A1',
        'background-900': '#64D296',
        'background-950': '#54CD8B',

        // Text colors
        'text-50': '#FFFFFF',
        'text-100': '#F8F8F8',
        'text-200': '#F0F0F0',
        'text-300': '#E8E8E8',
        'text-400': '#E0E0E0',
        'text-500': '#D8D8D8',
        'text-600': '#D0D0D0',
        'text-700': '#C8C8C8',
        'text-800': '#C0C0C0',
        'text-900': '#B8B8B8',
        'text-950': '#B0B0B0',

        // Primary colors
        'primary-50': '#E1F5FE',
        'primary-100': '#B3E0FF',
        'primary-200': '#81D4FA',
        'primary-300': '#4FC3F7',
        'primary-400': '#29B6F6',
        'primary-500': '#03A9F4',
        'primary-600': '#039BE5',
        'primary-700': '#0288D1',
        'primary-800': '#0277BD',
        'primary-900': '#01579B',
        'primary-950': '#003366',

        // Secondary colors (customize as needed)
        'secondary-50': '#F3E5F5',
        'secondary-100': '#E1BEE7',
        'secondary-200': '#CE93D8',
        'secondary-300': '#BA68C8',
        'secondary-400': '#AB47BC',
        'secondary-500': '#9C27B0',
        'secondary-600': '#8E24AA',
        'secondary-700': '#7B1FA2',
        'secondary-800': '#6A1B9A',
        'secondary-900': '#4A148C',
        'secondary-950': '#320B6F',

        // Accent colors (customize as needed)
        'accent-50': '#F9EBE2',
        'accent-100': '#FFCCBC',
        'accent-200': '#FFAB91',
        'accent-300': '#FF8A65',
        'accent-400': '#FF7043',
        'accent-500': '#FF5722',
        'accent-600': '#F4511E',
        'accent-700': '#E64A19',
        'accent-800': '#D84315',
        'accent-900': '#BF360C',
        'accent-950': '#8D6E63',
      },
    },
  },
  plugins: [],
};
