import { style } from '@vanilla-extract/css';

export const roadmap_Menu = style({
  paddingBottom: 100,
  paddingTop: 100,
  textAlign: 'center',
  width: '80%',
  margin: 'auto',
});

export const MenuContainer = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end',
  paddingBottom: 80,
});

export const text = style({
  fontWeight: 700,
  fontSize: 20,
});

export const roadmapArea = style({
  marginTop: 20,
  padding: 20,
});

export const roadmapAreaRight = style({
  display: 'inline-block',
  width: '80%',
  borderLeft: '1px solid #fff',
  boxSizing: 'border-box',
  padding: '20px',
});

export const container = style({
  paddingLeft: 20,
  paddingBottom: 20,
});

export const title = style({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 20,
  color: '#fff',
});

export const content = style({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 14,
  color: '#fff',
});
