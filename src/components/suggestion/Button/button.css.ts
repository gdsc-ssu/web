import { style } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { btnText, titleText } from '../../common/textToken.css';

const MEDIA_QUERY = {
  pc: `screen and (min-width: 909 px)`,
  mobile: `screen and (max-width: 908px)`,
} as const;

export const button = style({
  backgroundColor: '#000',
  borderRadius: 30,
  border: '1px solid #fff',
  margin: 10,
  padding: 10,
  paddingLeft: 30,
  paddingRight: 30,
  color: '#fff',

  fontSize: 18,

  ':hover': {
    background: `linear-gradient(135deg, ${COLORS.GDSC.Red}, ${COLORS.GDSC.Blue})`,
  },

  '@media': {
    [MEDIA_QUERY.mobile]: {
      margin: 5,
    },
  },
});
