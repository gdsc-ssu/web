import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { titleText, bodyText } from '../../common//textToken.css';

export const roadmapAreaLeft = styleVariants({
  box: [
    {
      display: 'inline-block',
      width: '20%',
      verticalAlign: 'top',
    },
  ],
  container: [
    bodyText.body1B,
    {
      textAlign: 'right',
      paddingRight: 20,
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
