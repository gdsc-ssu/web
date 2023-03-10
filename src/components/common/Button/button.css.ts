import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { btnText } from '../textToken.css';

export const button = style({
  backgroundColor: '#000',
  borderRadius: 30,
  border: '1px solid #fff',
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  color: '#fff',
  fontSize: 20,
});

export const buttonActive = styleVariants({
  frontEnd: [
    button,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Red}, ${COLORS.GDSC.Blue})`,
    },
  ],
  git: [
    button,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Green}, ${COLORS.GDSC.Blue})`,
    },
  ],
  crossFlatform: [
    button,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Blue}, ${COLORS.GDSC.Green})`,
    },
  ],
  ServerCloud: [
    button,
    btnText.button2B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Green}, ${COLORS.GDSC.Yellow})`,
    },
  ],
  AIML: [
    button,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Blue}, ${COLORS.GDSC.Red})`,
    },
  ],
  DevOps: [
    button,
    btnText.button4B,
    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Yellow}, ${COLORS.GDSC.Blue})`,
    },
  ],
});
