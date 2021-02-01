import Typography from 'typography';

export const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  headerFontFamily: ['Kanit', 'sans-serif'],
  bodyFontFamily: ['Kanit', 'sans-serif'],
  scaleRatio: 2.0,
  headerColor: 'var(--lightest-slate)',
  headerWeight: 500,
  bodyColor: 'var(--slate)',
  boldWeight: 600,
  bodyWeight: 400,
});

export const { rhythm, scale } = typography;
