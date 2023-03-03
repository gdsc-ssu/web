import { style, styleVariants } from '@vanilla-extract/css';

// TODO: style
export const base = style({
  position: 'fixed',
  zIndex: '999',
  fontSize: '16px',
  background: 'black',
  textAlign: 'center',
  padding: '8px 16px',
  color: 'white',
  borderRadius: '6px',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
});

export const grassTipStyle = styleVariants({
  block: [base, { display: 'block' }],
  none: [base, { display: 'none' }],
});

export const pointStyle = style({
  position: 'fixed',
  zIndex: '999',
  background: 'black',
  width: '10px',
  height: '10px',
  transform: 'rotate(45deg)',
  border: 'none',
});
