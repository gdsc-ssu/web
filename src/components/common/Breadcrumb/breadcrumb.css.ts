import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { titleText, bodyText } from '../textToken.css';

export const breadcrumb = styleVariants({
  box: [
    {
      gap: '5px',
      color: 'white',
    },
  ],
  title: [
    titleText.title,
    {
      // textAlign: 'center',
      marginBottom: 0,
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtitle: [
    titleText.subtitle3,
    {
      marginTop: 0,
      whiteSpace: 'pre-line',
      wordBreak: 'keep-all',
      // textAlign: 'center',
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
      lineHeight: '27px',
    },
  ],
});
