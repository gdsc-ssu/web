import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { titleText, bodyText } from '../../common//textToken.css';

const MEDIA_QUERY = {
  pc: `screen and (min-width: 909 px)`,
  mobile: `screen and (max-width: 908px)`,
} as const;

export const roadmapAreaLeft = styleVariants({
  box: [
    {
      display: 'inline-block',
      width: '20%',
      verticalAlign: 'top',
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
      textAlign: 'right',
      paddingRight: 20,
      '@media': {
        [MEDIA_QUERY.mobile]: {
          textAlign: 'left',
        },
      },
    },
  ],
  title: [
    titleText.title,
    {
      alignItems: 'center',
      color: '#fff',
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtitle: [
    bodyText.body1R,
    {
      alignItems: 'center',
      color: '#fff',
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
});
