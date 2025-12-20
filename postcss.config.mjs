const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Configure Flowbite for v4
      config: {
        content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          // Include Flowbite
          "./node_modules/flowbite/**/*.js",
        ],
      },
    },
  },
};

export default config;