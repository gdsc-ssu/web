import { style } from '@vanilla-extract/css';

// TODO: style
export const explainWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const explainLinkStyle = style({
  color: '#57606a',
  textDecoration: 'none',

  ':hover': {
    color: '#0969da ',
  },
});

export const colorExampleWrapperStyle = style({
  display: 'flex',
});

export const colorExampleStyle = style({
  margin: '0 5px',
});

export const colorExampleItemStyle = style({
  margin: '0 1.5px',
});
