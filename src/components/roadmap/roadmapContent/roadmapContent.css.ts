import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { titleText, bodyText } from '../../common/textToken.css';

const MEDIA_QUERY = {
  pc: `screen and (min-width: 909 px)`,
  mobile: `screen and (max-width: 908px)`,
} as const;

export const category = styleVariants({
  box: [
    {
      gap: '5px',
      paddingBottom: 0,
      paddingTop: 100,
      textAlign: 'center',
      width: '80%',
      margin: 'auto',
    },
  ],
  container: [
    bodyText.body1B,
    {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      paddingBottom: 100,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
      '@media': {
        [MEDIA_QUERY.mobile]: {
          display: 'block',
        },
      },
    },
  ],
  title: [
    bodyText.body1B,
    {
      // textAlign: 'center',
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
});

export const roadmapAreaRight = styleVariants({
  box: [
    {
      display: 'inline-block',
      width: '80%',
      borderLeft: '1px solid #fff',
      boxSizing: 'border-box',
      padding: '20px',
      '@media': {
        [MEDIA_QUERY.mobile]: {
          width: '100%',
        },
      },
    },
  ],
  container: [
    bodyText.body1B,
    {
      paddingLeft: 20,
      paddingBottom: 20,
      '@media': {
        [MEDIA_QUERY.mobile]: {
          paddingLeft: 0,
        },
      },
    },
  ],
  title: [
    bodyText.body1R,
    {
      // textAlign: 'center',
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtitle: [
    bodyText.caption,
    {
      // textAlign: 'center',
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
});

export const roadmapArea = style({
  marginTop: 20,
  padding: 20,
});
