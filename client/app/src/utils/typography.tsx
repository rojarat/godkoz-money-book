import Typography from "typography";

export const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Gilda", "serif"],
  bodyFontFamily: ["Libre Franklin", "sans-serif"],
  scaleRatio: 2.2,
  headerColor: "hsl(0,0%, 10%)",
  headerWeight: 500,
  bodyColor: "hsl(0,0%, 20%)",
  boldWeight: 600,
  bodyWeight: 400,
});

export const { rhythm, scale } = typography;
