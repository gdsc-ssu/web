import { styleVariants } from '@vanilla-extract/css';
import { COLORS } from '../colorToken';

export const Modal = styleVariants({
  container: [
    {
      width: '100%',
      height: '100%',
      background: COLORS.SSU.Blue,
      // background: 'rgba( 0, 0, 0, 0.25 )',
      // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      // backdropFilter: 'blur( 4px )',
      // webkitBackdropFilter: 'blur( 4px )',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '0px',
      left: '0px',
    },
  ],
});
