import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { btnText } from '../../common/textToken.css';

const MEDIA_QUERY = {
  pc: `screen and (min-width: 909 px)`,
  mobile: `screen and (max-width: 908px)`,
} as const;

export const button = style({
  backgroundColor: '#000',
  borderRadius: 30,
  border: '1px solid #fff',
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  color: '#fff',
  fontSize: btnText.button4B,
  '@media': {
    [MEDIA_QUERY.mobile]: {
      margin: 5,
    },
  },
});

export const buttonActive = styleVariants({
  frontEnd: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Red}, ${COLORS.GDSC.Blue})`,
    },
  ],
  git: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Green}, ${COLORS.GDSC.Blue})`,
    },
  ],
  crossFlatform: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Blue}, ${COLORS.GDSC.Green})`,
    },
  ],
  ServerCloud: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Green}, ${COLORS.GDSC.Yellow})`,
    },
  ],
  AIML: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Blue}, ${COLORS.GDSC.Red})`,
    },
  ],
  DevOps: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.GDSC.Yellow}, ${COLORS.GDSC.Blue})`,
    },
  ],
  base: [
    button,

    {
      background: `linear-gradient(135deg, ${COLORS.grayscale.Black}, ${COLORS.grayscale.Black})`,
    },
  ],
});
