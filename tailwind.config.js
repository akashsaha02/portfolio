/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f8f9fa', // Light background color
          text: '#212529', // Text color for light mode
          primary: '#007bff', // Primary accent color
          secondary: '#6c757d', // Secondary accent color
          card: '#ffffff', // Card background
        },
        dark: {
          background: '#121212', // Dark background color
          text: '#e0e0e0', // Text color for dark mode
          primary: '#1e90ff', // Primary accent color
          secondary: '#adb5bd', // Secondary accent color
          card: '#1f1f1f', // Card background
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#007bff',
          secondary: '#6c757d',
          accent: '#0dcaf0',
          neutral: '#f8f9fa',
          'base-100': '#ffffff',
          info: '#0dcaf0',
          success: '#198754',
          warning: '#ffc107',
          error: '#dc3545',
        },
      },
      {
        dark: {
          primary: '#1e90ff',
          secondary: '#adb5bd',
          accent: '#6610f2',
          neutral: '#121212',
          'base-100': '#1f1f1f',
          info: '#0dcaf0',
          success: '#198754',
          warning: '#ffc107',
          error: '#dc3545',
        },
      },
    ],
  },
};
