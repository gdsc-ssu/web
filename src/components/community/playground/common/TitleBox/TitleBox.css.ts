import { styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';
import { titleText } from '../textToken.css';

export const titleBox = styleVariants({
  box: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      color: 'white',
    },
  ],
  title: [
    titleText.title,
    {
      textAlign: 'center',
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
    },
  ],
  subtitle: [
    titleText.subtitle3,
    {
      whiteSpace: 'pre-line',
      wordBreak: 'keep-all',
      textAlign: 'center',
      textShadow: `0.5px 0.5px 1.5px ${COLORS.grayscale.Gray8}`,
      lineHeight: '27px',
    },
  ],
});
