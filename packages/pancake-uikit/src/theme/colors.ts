import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    special: "linear-gradient(70deg, rgba(66,36,82,1) 0%, rgba(74,36,75,1) 46%, rgba(118,35,35,1) 100%)",
    subtine: "linear-gradient(70deg, rgb(54 27 68) 0%, rgba(74,36,75,1) 46%, rgb(78 27 38) 100%)"
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#6a83ff",
  background: "#290538",
  backgroundDisabled: "#3c2640",
  // backgroundAlt: "#27262c",
  backgroundAlt: "#412047b5",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  // cardBorder: "#383241",
  cardBorder: "#8416a3",
  contrast: "#FFFFFF",
  dropdown: "#26102cc2",
  dropdownDeep: "#100C18",
  invertedContrast: "#34123ee6",
  input: "#280726ab",
  inputSecondary: "#1f0a20",
  primaryDark: "#0098A1",
  tertiary: "#5e2339",
  text: "#FFFFFF",
  textDisabled: "#837c95",
  textSubtle: "#c0c0c0",
  disabled: "#524B63",
  gradients: {
    // bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    bubblegum: "linear-gradient(139.73deg,#313d5c8c 0%,#65233273 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    // cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    cardHeader: "linear-gradient(166.77deg,#451f4a 0%,#681b29 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    special: "linear-gradient(70deg,rgb(66 36 82 / 85%) 0%,rgb(74 36 75 / 74%) 46%,rgb(118 35 35 / 74%) 100%)",
    subtine: "linear-gradient(70deg, rgb(54 27 68) 0%, rgba(74,36,75,1) 46%, rgb(78 27 38) 100%)"
  },
};