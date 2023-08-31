import { keyframes, style } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS, MEDIA_QUERY } from '@/constants/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '500vh',
  position: 'relative',
});

export const wrapper = style({
  gap: '128px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    gap: '53px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    gap: '40px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    gap: '20px',
  },
});

export const sectionContainer = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const titleWrapper = style({
  flexShrink: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '101px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    paddingRight: '76px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    paddingRight: '101px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    paddingRight: '52px',
  },
});

const titleText = style({
  ...TEXT_STYLES.maintitle,
  textAlign: 'end',
});

export const title = style([titleWrapper, titleText]);

const descriptionWrapper = style({
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    padding: '0 104px 0',
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
  color: COLORS.primary.blue,
  wordBreak: 'keep-all',
  fontSize: '40px',
  fontWeight: 400,
  lineHeight: '110%',
  display: 'block',
  marginBottom: '12px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    fontSize: '32px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    fontSize: '32px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '28px',
  },
});

export const textWrapper = style({
  display: 'flex',
});

export const textWithUnderscore = style({
  position: 'relative',
  whiteSpace: 'nowrap',
});

export const underscoreIcon = style({
  position: 'absolute',
  left: 0,
  bottom: '-2px',
  width: '100%',
});

export const pencilIcon = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '101px',
  height: '101px',

  [`@media ${MEDIA_QUERY.tabletLg}`]: {
    width: '80px',
    height: '80px',
  },
  [`@media ${MEDIA_QUERY.tabletSm}`]: {
    width: '80px',
    height: '80px',
  },
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '50px',
    height: '50px',
  },
});

const slideKeyframe = keyframes({
  '0%': { left: 0 },
  '100%': { translate: '-50%' },
});

const slider = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
  marginTop: '40px',
  height: '280px',
  alignSelf: 'flex-start',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    marginTop: '24px',
    height: '180px',
  },
});

export const seminarSlider = style([
  slider,
  {
    animation: `90s linear infinite ${slideKeyframe}`,
    width: `${400 * 54 + 24 * 54}px`,
    [`@media ${MEDIA_QUERY.mobile}`]: {
      width: `${240 * 54 + 24 * 54}px`,
    },
  },
]);

export const studySlider = style([
  slider,
  {
    animation: `40s linear infinite ${slideKeyframe}`,
    width: `${300 * 22 + 24 * 22}px`,
    [`@media ${MEDIA_QUERY.mobile}`]: {
      width: `${200 * 22 + 24 * 22}px`,
    },
  },
]);

export const eventSlider = style([
  slider,
  {
    animation: `20s linear infinite ${slideKeyframe}`,
    width: `${240 * 18 + 24 * 18}px`,
    [`@media ${MEDIA_QUERY.mobile}`]: {
      width: `${160 * 18 + 24 * 18}px`,
    },
  },
]);
