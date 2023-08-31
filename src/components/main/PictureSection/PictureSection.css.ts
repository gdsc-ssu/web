import { style } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS, MEDIA_QUERY } from '@/constants/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  position: 'relative',
  gap: '80px',
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
  lineHeight: '110%',
  display: 'block',
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

export const characterIcon = style({
  position: 'absolute',
  top: '-30px',
  left: '-30px',
  width: '52px',
  height: '43px',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '40px',
    height: '33px',
    top: '-24px',
    left: '-24px',
  },
});

export const underscoreIcon = style({
  position: 'absolute',
  left: 0,
  bottom: '-2px',
  width: '100%',
});

export const firstPictureItem = style({
  width: '300px',
  height: '240px',
  padding: '10px',
  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.15)',
  backgroundColor: '#ffffff',
  position: 'relative',
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '260px',
    height: '200px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '220px',
    height: '160px',
  },
});

export const pictureItem = style([firstPictureItem, { marginLeft: '-80px' }]);

export const pictureItemBottom = style({
  height: '40px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    height: '40px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    height: '24px',
  },
});

export const pictureItemTop = style({
  width: '100%',
  height: '180px',
  position: 'relative',
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    height: '140px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    height: '116px',
  },
});

export const picture = style({
  objectFit: 'cover',
  objectPosition: 'center',
});

export const pictureItemTape = style({
  position: 'absolute',
  width: '30px',
  height: '52px',
  backgroundColor: 'rgba(253, 255, 171, 0.60)',
  boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
  top: '-26px',
  left: '50%',
  transform: 'translate(-50%)',
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '24px',
    height: '48px',
    top: '-24px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '20px',
    height: '40px',
    top: '-20px',
  },
});

export const picturesContainer = style({
  display: 'flex',
  flexDirection: 'row',
});
