/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "#FDEFED",
        100: "#FBE0DA",
        200: "#F7C1B6",
        300: "#F3A191",
        400: "#EE826C",
        500: "#EA6045",
        600: "#DC3919",
        700: "#A52B13",
        800: "#6E1D0C",
      },
      yellow: {
        50: "#FFFCE5",
        100: "#FFF9CC",
        200: "#FFF399",
        300: "#FFED66",
        400: "#FFE733",
        500: "#FFE000",
        600: "#CCB400",
        700: "#998700",
        800: "#665A00",
      },
      blue: {
        50: "#E2F5F9",
        100: "#C0EAF1",
        200: "#86D6E4",
        300: "#47C1D7",
        400: "#279BB0",
        500: "#196572",
        600: "#14515C",
        700: "#0F3B43",
        800: "#0A292E",
      },
      neutrals: {
        50: "#F8F8F8",
        100: "#DEDCD8",
        200: "#BBB7AF",
        300: "#9B9488",
        400: "#746E62",
        500: "#4D4941",
        600: "#3D3A33",
        700: "#2F2D28",
        800: "#1E1D1A",
      },
      white: "#FFFFFF",
      black: "#101010",
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "144px",
      "5xl": "160px",
      "6xl": "176px",
      "7xl": "192px",
      "8xl": "208px",
      "9xl": "240px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    // fontFamily: {
    //     sans: ['Prompt', 'sans-serif'],
    //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
    // },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
