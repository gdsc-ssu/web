import { style } from '@vanilla-extract/css';

// TODO: style(사이즈), 반응형, constant
export const explainWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: '18px',
  color: '#D6D6D6',
  paddingLeft: '40px',
  marginTop: '3px',
});

export const explainLinkStyle = style({
  textDecoration: 'none',
  color: '#D6D6D6',

  ':hover': {
    color: '#4286F5',
  },
});

export const colorExampleWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const colorExampleStyle = style({
  width: '91px',
  height: '15px',
  margin: '0 8px',
});
