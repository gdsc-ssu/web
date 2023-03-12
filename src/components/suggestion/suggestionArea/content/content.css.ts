import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../../common/colorToken';
import { titleText, bodyText } from '../../../common/textToken.css';

const BREAKPOINTS = [500, 800] as const;
const MEDIA_QUERY = {
  pc: `screen and (min-width: ${BREAKPOINTS[1]}px)`,
  mobile: `screen and (max-width: ${BREAKPOINTS[0]}px)`,
} as const;

export const suggestion = styleVariants({
  container: [
    {
      gap: '5px',
      padding: 80,
      textAlign: 'center',
      margin: 'auto',
      color: 'white',
      whiteSpace: 'pre-line',
      display: 'block',
      '@media': {
        [MEDIA_QUERY.mobile]: {
          padding: 50,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  ],
  title: [
    titleText.title,
    {
      // textAlign: 'center',
      textAlign: 'center',
      margin: 'auto',
      padding: 10,
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtitle: [
    bodyText.body3,
    {
      textAlign: 'center',
      margin: 'auto',
    },
  ],
  text: [
    bodyText.body1R,
    {
      // textAlign: 'center',
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtext: [
    bodyText.caption,
    {
      textAlign: 'left',
      marginBottom: 0,
      width: '80%',
      margin: 'auto',
      color: `${COLORS.grayscale.Gray6}`,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  inputStyle: [
    bodyText.body1R,
    {
      backgroundColor: 'black',
      color: 'white',
      width: '80%',
      height: 40,
      border: 'none',
      borderBottom: '1px solid #fff',
      display: 'block',
      fontSize: 20,
      // margin: 70,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,

      margin: 'auto',
      marginBottom: 10,
    },
  ],
});
