import { COLORS, MEDIA_QUERY, TEXT_STYLES } from '@/constants/styles';
import { style } from '@vanilla-extract/css';

export const seminarContainer = style({
  width: '400px',
  aspectRatio: '1280 / 720',
  borderRadius: '10px',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '240px',
  },
});

export const seminarImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
});

export const studyContainer = style({
  width: '300px',
  height: '280px',
  borderRadius: '10px',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '200px',
    height: '180px',
  },
});

export const studyTopArea = style({
  width: '100%',
  height: '170px',
  position: 'relative',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    height: '100px',
  },
});

export const studyTagsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  position: 'absolute',
  left: '24px',
  bottom: '14px',
});

export const studyTag = style({
  padding: '6px 13px',
  borderRadius: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    padding: '2px 8px',
  },
});

export const studyTagText = style({
  color: COLORS.grayscale.gray8,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '10px',
    fontWeight: 400,
  },
});

export const studyImageFilter = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  position: 'absolute',
});

export const studyImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
});

export const studyBottomArea = style({
  padding: '24px 24px 0 24px',
  backgroundColor: COLORS.grayscale.white,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    padding: '16px 16px 0 16px',
  },
});

export const studyTitleText = style({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 'normal',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '16px',
    fontWeight: 700,
  },
});

export const studyDescriptionText = style({
  color: COLORS.grayscale.gray7,
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 'normal',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    fontSize: '12px',
    fontWeight: 400,
  },
});

export const eventContainer = style({
  width: '240px',
  height: '240px',
  borderRadius: '10px',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  [`@media ${MEDIA_QUERY.mobile}`]: {
    width: '160px',
    height: '160px',
  },
});

export const eventImage = style({
  objectFit: 'cover',
});
