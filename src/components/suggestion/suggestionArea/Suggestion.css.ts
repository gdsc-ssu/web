import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  padding: 40,
  textAlign: 'center',
  margin: 'auto',
  color: 'white',
});

export const circle = styleVariants({
  airplane: [
    {
      backgroundColor: '#00688F',
      width: 300,
      height: 300,
      borderRadius: '50%',
      margin: 'auto',
    },
  ],
  heart: [
    {
      backgroundColor: '#00688F',
      width: 300,
      height: 300,
      borderRadius: '50%',
      margin: 'auto',
    },
  ],
});
