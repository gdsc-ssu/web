import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 150,
  textAlign: 'center',
  margin: 'auto',
  color: 'white',
});

export const circle = style({
  backgroundColor: '#00688F',
  width: 300,
  height: 300,
  borderRadius: '50%',
  margin: 'auto',
  paddingBottom: 20,
});
