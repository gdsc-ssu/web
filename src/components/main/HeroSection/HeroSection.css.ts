import { COLORS, MEDIA_QUERY } from '@/constants/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1280px',
  padding: '101px',
  margin: 'auto',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    padding: '101px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    padding: '101px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    padding: '52px',
  },
});

export const logo = style({
  width: '200px',
  height: '103px',
  marginBottom: '56px',
  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '160px',
    height: '82px',
    marginBottom: '40px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '120px',
    height: '62px',
    marginBottom: '32px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '20vw',
    height: 'calc(20vw * 103 / 200)',
    marginBottom: '5vw',
  },
});

export const titleText = style({
  fontSize: '120px',
  lineHeight: '90%',
  fontWeight: 900,
  margin: 0,
  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    fontSize: '96px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    fontSize: '80px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '12vw',
  },
});

export const titleGrayText = style({
  color: COLORS.grayscale.gray5,
});
