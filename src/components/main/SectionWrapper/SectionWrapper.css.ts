import { style, styleVariants } from '@vanilla-extract/css';
import { MEDIA_QUERY } from '@/constants/styles';

const wrapperBase = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1280px',
  height: '100vh',
  padding: '0 51px',
  gap: '128px',
  margin: 'auto',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    padding: '0 24px',
    gap: '53px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0',
    gap: '150px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0',
    gap: '88px',
  },
});

const wrapperReverse = style({
  flexDirection: 'row-reverse',

  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    flexDirection: 'column',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    flexDirection: 'column',
  },
});

export const wrapper = styleVariants({
  default: [wrapperBase],
  reverse: [wrapperBase, wrapperReverse],
});
