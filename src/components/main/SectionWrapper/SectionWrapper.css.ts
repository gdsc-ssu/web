import { style, styleVariants } from '@vanilla-extract/css';
import { MEDIA_QUERY } from '@/constants/styles';

const wrapperBase = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1280px',
  padding: '0 51px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    padding: '0 48px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0',
  },
});

const wrapperReverse = style({
  flexDirection: 'row-reverse',

  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export const wrapper = styleVariants({
  default: [wrapperBase],
  reverse: [wrapperBase, wrapperReverse],
});
