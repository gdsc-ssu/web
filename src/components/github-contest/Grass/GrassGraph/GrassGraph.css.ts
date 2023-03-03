import { style } from '@vanilla-extract/css';

// TODO: stlye(font size), constant, 반응형
export const grassGraphFontStyle = style({
  fontSize: '18px',
  fill: '#D6D6D6',
});

export const grassGraphBaseStyle = style({
  position: 'relative',
  width: '100%',
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    height: '0px',
  },
});

export const grassGraphSvgStyle = style({
  minWidth: '1060px',
  height: '160px',
});
