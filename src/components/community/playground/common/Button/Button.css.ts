import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { btnText } from '../textToken.css';

const btnBase = style({
  border: 'none',
  width: '90%',
  minWidth: '270px',
  minHeight: '50px',
  borderRadius: '500px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 50px',
  fontFamily: `'SUIT Variable', sans-serif`,
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  textAlign: 'center',
});

export const button = styleVariants({
  black: [
    btnBase,
    btnText.button4B,
    {
      backgroundColor: `black`,
      color: `white`,
    },
  ],
  white: [
    btnBase,
    btnText.button4B,
    {
      backgroundColor: `white`,
      color: `black`,
    },
  ],
  blue: [
    btnBase,
    btnText.button4B,
    {
      backgroundColor: `white`,
      color: COLORS.SSU.DeepBlue,
    },
  ],
  result: [
    btnBase,
    btnText.button2B,
    {
      backgroundColor: COLORS.grayscale.white,
      color: COLORS.SSU.DeepBlue,
    },
  ],
  gradient: [
    btnBase,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Blue}, ${COLORS.GDSC.Red})`,
      color: COLORS.grayscale.white,
    },
  ],
});
