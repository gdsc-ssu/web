import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  position: 'absolute',
  zIndex: '999',
  fontSize: '12px',
  background: 'black',
  textAlign: 'center',
  padding: '8px 16px',
  color: 'white',
  borderRadius: '6px',
});

export const grassTipStyle = styleVariants({
  block: [base, { display: 'block' }],
  none: [base, { display: 'none' }],
});
