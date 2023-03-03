import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  outline: '1px solid rgba(27, 31, 35, 0.06);',
  outlineOffset: '-1px',
  borderRadius: '2px',
});

// TODO: constant
export const grassGraphItemStyle = styleVariants({
  '0': [base, { fill: '#EDEDED' }],
  '1': [base, { fill: '#AAFFFF' }],
  '2': [base, { fill: '#58C4C4' }],
  '3': [base, { fill: '#00A4CA' }],
  '4': [base, { fill: '#00688F' }],
});
