/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        garibazartheme: {
          primary: "#FFB700",
          secondary: "#202325",
          accent: "#3A4256",
          neutral: "#3D4451",

          "base-100": "#FFFFFF",
          "--navbarText": "#333333",
          "--footerText": "#FFFFFD",
          "--dashboardNav": "#36454f",
          "--dashboardText": "#FFFFFF",
          "--dashboardOutlet": "#F4F7FC",
          "--reviewBackground": "#FFFFFF",
        },
      },
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          primary: "#F28C18",
          secondary: "#212121",
          "--navbarText": "#333333",
          "--footerText": "#D3D3D3",
          "--dashboardNav": "#1E1E1E",
          "--dashboardText": "#D3D3D3",
          "--dashboardOutlet": "#212121",
          "--reviewBackground": "#212121",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
