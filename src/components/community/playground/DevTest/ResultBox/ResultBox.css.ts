import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { bodyText } from '../../common/textToken.css';
import { titleText } from '../../common/textToken.css';

export const resultBox = styleVariants({
  box: [
    {
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '20px',
      padding: '40px 10px',
      gap: '40px',
    },
  ],
  titleBox: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '3px',
      whiteSpace: 'pre-line',
      wordBreak: 'keep-all',
    },
  ],
  title: [
    bodyText.body2R,
    {
      color: COLORS.grayscale.Gray8,
    },
  ],
  subtitle: [
    bodyText.body1B,
    {
      color: COLORS.grayscale.Gray9,
    },
  ],
  img: [
    {
      position: 'relative',
      width: '90%',
      height: '200px',
    },
  ],
  list: [
    bodyText.body3,
    {
      listStyleType: 'none',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      whiteSpace: 'pre-line',
      wordBreak: 'keep-all',
      gap: '8px',
      color: COLORS.grayscale.Gray9,
    },
  ],
  logo: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    },
  ],
  recDetail: [
    {
      fontSize: '14px',
      textAlign: 'center',
      color: COLORS.grayscale.Gray7,
    },
  ],
});
