import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { btnText } from '../textToken.css';

const btnBase = style({
  border: 'none',
  width: '65%',
  minWidth: '220px',
  minHeight: '55px',
  borderRadius: '20px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 50px',
  fontFamily: `'SUIT Variable', sans-serif`,
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  textAlign: 'center',
  backgroundColor: 'white',
});

export const startBtn = styleVariants({
  devTest: [
    btnBase,
    btnText.border,
    {
      color: `${COLORS.SSU.DeepBlue}`,
      fontWeight: '800',
    },
  ],
  fortune: [
    btnBase,
    btnText.border,
    {
      color: `${COLORS.SSU.DeepBlue}`,
      fontWeight: '800',
    },
  ],
});
