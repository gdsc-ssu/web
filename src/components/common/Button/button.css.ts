import { style } from '@vanilla-extract/css';

export const button = style({
  backgroundColor: '#000',
  borderRadius: 500,
  border: '2px solid #fff',
  padding: 10,
  paddingLeft: 30,
  paddingRight: 30,
  margin: 10,
  color: '#fff',
  fontSize: 20,

  ':hover': {
    background: `${(props: any) => props.from}`,
    backgroundImage:
      '-webkit-linear-gradient( 180deg, #EA4235 0%, #4286F5 100%)',
    border: 'none',
  },
});
