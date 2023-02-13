import { styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../../common/colorToken';
import { questions } from '@/resources/devTestQustions';

export const progress = styleVariants({
  outer: [
    {
      width: '90%',
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
  inner: [
    {
      transition: 'all 0.25s',
      backgroundColor: `${COLORS.SSU.SkyBlue}`,
    },
  ],
});
