/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "426px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    colors: {
      aeroColor: "#E58411",
      productBgColor: "#F7F7F7",
      titleColor: "#1E1E1E",
      productButtonBgColor: "#EEEEEE",
    },
    fontFamily: {
      "Gilroy-Bold": ["Gilroy-Bold", "sans-sarif"],
      "Gilroy-Medium": ["Gilroy-Medium", "sans-sarif"],
      "Gilroy-Regular": ["Gilroy-Regular", "sans-sarif"],
      "Inter-Regular": ["Inter-Regular", "sans-sarif"],
      Inter: ["Inter", "sans-sarif"],
      "DM-Sans": ["DM Sans", "sans-sarif"],
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('/src/Assets/images/heroImg.png')",
        union: "url('/src/Assets/images/Union.svg')",
      },
    },
  },
  plugins: [],
};
