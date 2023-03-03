import { style } from '@vanilla-extract/css';

export const grassWrapperStyle = style({
  position: 'relative',
  maxWidth: '1060px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  margin: '0 10px',
});

// TODO: style, 반응형, constant
export const grassInfoStyle = style({
  fontSize: '18px',
  color: '#D6D6D6',
});
