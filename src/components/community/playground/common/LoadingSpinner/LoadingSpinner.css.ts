import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { bodyText } from '../textToken.css';

export const Spinner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
});

const flip = keyframes({
  '0%': { transform: 'rotateY(360deg)' },
  '80%': { transform: 'rotateY(360deg)' },
});

const textBase = style({
  position: 'relative',
  display: 'inline-block',
  fontSize: '40px',
  fontWeight: '900',
  color: '#fff',
  textTransform: 'uppercase',
  animation: `${flip} 2s infinite`,
});

export const waviy = styleVariants({
  container: [
    {
      position: 'relative',
    },
  ],
  text1: [
    textBase,
    {
      animationDelay: 'calc(.2s * 1)',
    },
  ],
  text2: [
    textBase,
    {
      animationDelay: 'calc(.2s * 2)',
    },
  ],
  text3: [
    textBase,
    {
      animationDelay: 'calc(.2s * 3)',
    },
  ],
  text4: [
    textBase,
    {
      animationDelay: 'calc(.2s * 4)',
    },
  ],
});

const load = keyframes({
  '0%': { WebkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)' },
  '100%': { WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' },
});

export const Loader = style({
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '11px',
  textIndent: '-99999em',
  position: 'relative',
  width: '10em',
  height: '10em',
  boxShadow: 'inset 0 0 0 1em',
  WebkitTransform: 'translateZ(0)',
  msTransform: 'translateZ(0)',
  transform: 'translateZ(0)',
  selectors: {
    '&:before': {
      position: 'absolute',
      content: '',
      width: '5.2em',
      height: '10.2em',
      background: COLORS.SSU.Blue,
      borderRadius: '10.2em 0 0 10.2em',
      top: '-0.1em',
      left: '-0.1em',
      WebkitTransformOrigin: '5.1em 5.1em',
      transformOrigin: '5.1em 5.1em',
      WebkitAnimation: `${load} 2s infinite ease 1.5s`,
      animation: `${load} 2s infinite ease 1.5s`,
    },
    '&:after': {
      position: 'absolute',
      content: '',
      width: '5.2em',
      height: '10.2em',
      background: COLORS.SSU.Blue,
      borderRadius: '0 10.2em 10.2em 0',
      top: '-0.1em',
      left: '4.9em',
      WebkitTransformOrigin: ' 0.1em 5.1em',
      transformOrigin: '0.1em 5.1em',
      WebkitAnimation: `${load} 2s infinite ease`,
      animation: `${load} 2s infinite ease`,
    },
  },
});

export const Text = styleVariants({
  subtext: [
    bodyText.body1R,
    {
      color: `white`,
      marginTop: '-25px',
    },
  ],
});
