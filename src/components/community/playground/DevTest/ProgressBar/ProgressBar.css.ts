import { styleVariants, style } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';

const innerBase = style({
  transition: 'all 0.25s',
  background: `linear-gradient(135deg, ${COLORS.SSU.DeepBlue}, ${COLORS.SSU.SkyBlue})`,
  height: '100%',
  borderRadius: '500px',
});

export const progress = styleVariants({
  outer: [
    {
      width: '100%',
      height: '15px',
      borderRadius: '500px',
      backgroundColor: `${COLORS.grayscale.Gray2}`,
      overflow: 'hidden',
      padding: '2px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  ],
  inner__0: [
    innerBase,
    {
      width: `0%`,
    },
  ],
  inner__1: [
    innerBase,
    {
      width: `9%`,
    },
  ],
  inner__2: [
    innerBase,
    {
      width: `18%`,
    },
  ],
  inner__3: [
    innerBase,
    {
      width: `27%`,
    },
  ],
  inner__4: [
    innerBase,
    {
      width: `36%`,
    },
  ],
  inner__5: [
    innerBase,
    {
      width: `45%`,
    },
  ],
  inner__6: [
    innerBase,
    {
      width: `54%`,
    },
  ],
  inner__7: [
    innerBase,
    {
      width: `63%`,
    },
  ],
  inner__8: [
    innerBase,
    {
      width: `72%`,
    },
  ],
  inner__9: [
    innerBase,
    {
      width: `81%`,
    },
  ],
  inner__10: [
    innerBase,
    {
      width: `90%`,
    },
  ],
  inner__11: [
    innerBase,
    {
      width: `100%`,
    },
  ],
});
