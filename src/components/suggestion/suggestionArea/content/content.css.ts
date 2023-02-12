import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 100,
  textAlign: 'center',
  margin: 'auto',
  color: 'white',
  whiteSpace: 'pre-line',
  display: 'block',
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
  padding: 10,
});

export const Stext = style({
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'left',
});

export const inputStyle = style({
  backgroundColor: 'black',
  color: 'white',
  width: '85%',
  height: 40,
  borderBottom: '1px solid #fff',
  display: 'block',
  fontSize: 20,
  margin: 100,
});
