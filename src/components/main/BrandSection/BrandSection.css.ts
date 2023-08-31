import { style } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS, MEDIA_QUERY } from '@/constants/styles';

export const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const wrapper = style({
  gap: '128px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    gap: '53px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    gap: '150px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    gap: '88px',
  },
});

const titleWrapper = style({
  flexShrink: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '101px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    paddingLeft: '76px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    paddingLeft: '101px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    paddingLeft: '52px',
  },
});

const titleText = style({
  ...TEXT_STYLES.maintitle,
});

export const title = style([titleWrapper, titleText]);

const descriptionWrapper = style({
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    padding: '0 104px 100px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    padding: '0 52px',
  },
});

const descriptionText = style({
  ...TEXT_STYLES.description,
});

export const description = style([descriptionWrapper, descriptionText]);

export const hipiText = style({
  color: COLORS.primary.red,
  wordBreak: 'keep-all',
  fontSize: '32px',
  fontWeight: 400,
  lineHeight: '110%',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    fontSize: '24px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    fontSize: '24px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '20px',
  },
});

export const iconWrapper = style({
  margin: '0 4px',
});

const textIcon = style({
  verticalAlign: 'middle',
});

const starIcon = style({
  width: '34px',
  height: '33px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '28px',
    height: '27px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '28px',
    height: '27px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '24px',
    height: '23px',
  },
});

const worldWithFlagIcon = style({
  width: '24px',
  height: '35px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '18px',
    height: '26px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '18px',
    height: '26px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '14px',
    height: '20px',
  },
});

export const textStarIcon = style([textIcon, starIcon]);

export const textWorldWithFlagIcon = style([textIcon, worldWithFlagIcon]);

export const textWrapper = style({
  display: 'flex',
});

export const textWithUnderscore = style({
  position: 'relative',
  whiteSpace: 'nowrap',
});

export const smileIconWrapper = style({
  display: 'flex',
  height: '100%',
});

export const smileIcon = style({
  width: '47px',
  height: '35px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '37px',
    height: '28px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '37px',
    height: '28px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '32px',
    height: '24px',
  },
});

export const underscoreIcon = style({
  position: 'absolute',
  left: 0,
  bottom: '-2px',
  width: '100%',
});

export const paperAirplaneIcon = style({
  position: 'absolute',
  left: 0,
  bottom: '-69px',
  width: '182px',
  height: '124px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    bottom: '-83px',
    width: '160px',
    height: '110px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    bottom: '-83px',
    left: '25px',
    width: '160px',
    height: '110px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    bottom: '-51px',
    left: '9px',
    width: '114px',
    height: '78px',
  },
});
