import { globalStyle, style, createVar } from '@vanilla-extract/css';

globalStyle('html, body', {
  backgroundColor: 'black',
  color: 'white',
  width: '95%',
  margin: 'auto',
});

export const breadcrumb_title = style({
  backgroundColor: 'white',
});
