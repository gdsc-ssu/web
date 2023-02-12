import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 100,
  textAlign: 'center',
  margin: 'auto',
  color: 'white',
  whiteSpace: 'pre-line',
});

export const text = style({
  fontSize: 20,
  fontWeight: 500,
  textAlign: 'center',
  margin: 'auto',
});

export const Btext = style({
  fontSize: 36,
  fontWeight: 800,
  textAlign: 'center',
  margin: 'auto',
});

export const Stext = style({
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'left',
});
