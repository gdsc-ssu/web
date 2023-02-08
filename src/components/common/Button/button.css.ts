import { style } from '@vanilla-extract/css';

export const button = style({
  backgroundColor: '#000',
  borderRadius: 20,
  border: '1px solid #fff',
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  color: '#fff',

  ':hover': {
    backgroundImage:
      '-webkit-linear-gradient( 180deg, #EA4235 0%, #4286F5 100%)',
    border: 'none',
  },
});
