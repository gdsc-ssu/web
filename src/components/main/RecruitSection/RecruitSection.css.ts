import { style } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS, MEDIA_QUERY } from '@/constants/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  position: 'relative',
  gap: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

export const titleText = style({
  ...TEXT_STYLES.maintitle,
  textAlign: 'center',
  whiteSpace: 'nowrap',
});

export const hipiText = style({
  wordBreak: 'keep-all',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '120%',
  display: 'block',
  textAlign: 'center',
  color: COLORS.primary.green,
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    fontSize: '20px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '16px',
  },
});

export const textWrapper = style({
  display: 'flex',
});

export const textWithUnderscore = style({
  position: 'relative',
  whiteSpace: 'nowrap',
});

export const flowerIcon = style({
  position: 'absolute',
  left: '-41px',
  width: '41px',
  height: '76px',
  top: '50%',
  transform: 'translateY(-50%)',
  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '30px',
    height: '55px',
    left: '-32px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '30px',
    height: '55px',
    left: '-32px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '20px',
    height: '37px',
    left: '-24px',
  },
});

export const underscoreIcon = style({
  position: 'absolute',
  left: 0,
  bottom: '-2px',
  width: '100%',
});

export const button = style({
  width: '260px',
  height: '60px',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.primary.green,
  padding: 0,
  border: 0,
  cursor: 'pointer',
  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '240px',
    height: '52px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '240px',
    height: '52px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '200px',
    height: '44px',
  },
});

export const buttonText = style({
  ...TEXT_STYLES.subtitle1,
  color: COLORS.grayscale.white,
});

export const descriptionWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const arrowIcon = style({
  width: '11px',
  height: '25px',
});
