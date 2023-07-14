/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: {
          DEFAULT: "#4B5563", // Neutral Gray
        },
        heading: {
          DEFAULT: "#1F2937", // Dark Gray
        },
        hr: {
          DEFAULT: "#E5E7EB", // Light Gray
        },
        neutral: {
          DEFAULT: "#6B7280", // Default Neutral -- 500
          accent: "#9CA3AF", // Neutral Accent -- 400
          100: "#F3F4F6", // Lightest Gray
          200: "#E5E7EB", // Light Gray
          300: "#D1D5DB", // Light Mid Gray
          400: "#9CA3AF", // Mid Gray
          500: "#6B7280", // Slightly Dark Gray
          600: "#4B5563", // Dark Gray
          700: "#374151", // Darker Gray
          800: "#1F2937", // Very Dark Gray
          900: "#111827", // Darkest Gray
        },
        primary: {
          DEFAULT: "#06B6D4", // Cyan
          accent: "#0891B2", // Darker Cyan
        },
        secondary: {
          DEFAULT: "#F59E0B", // Amber
          accent: "#D97706", // Darker Amber
        },
        critical: {
          DEFAULT: "#EF4444", // Red
          accent: "#DC2626", // Dark Red
        },
        success: {
          DEFAULT: "#22C55E", // Green
          accent: "#16A34A", // Dark Green
        },
        warning: {
          DEFAULT: "#FBBF24", // Yellow
          accent: "#D97706", // Dark Yellow
        },
        info: {
          DEFAULT: "#3B82F6", // Blue
          accent: "#2563EB", // Dark Blue
        },
      },
    },
  },
  plugins: [],
};
