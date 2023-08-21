import { MEDIA_QUERY } from './mediaQuery';

export const TEXT_STYLE_NAME = {
  maintitle: 'maintitle',
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  button1B: 'button1B',
  button1R: 'button1R',
  button2B: 'button2B',
  button2R: 'button2R',
  button3R: 'button3R',
  button4B: 'button4B',
  caption: 'caption',
  description: 'description',
} as const;

export type TextStyleNameType =
  typeof TEXT_STYLE_NAME[keyof typeof TEXT_STYLE_NAME];

interface TextStyleType {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}

export const TEXT_STYLES: Record<TextStyleNameType, TextStyleType> = {
  [TEXT_STYLE_NAME.maintitle]: {
    fontSize: '64px',
    fontWeight: 700,
    lineHeight: '120%',
    [`@media ${MEDIA_QUERY.tabletLg}`]: {
      fontSize: '48px',
    },
    [`@media ${MEDIA_QUERY.tabletSm}`]: {
      fontSize: '48px',
    },
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '36px',
    },
  },
  [TEXT_STYLE_NAME.title]: {
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '30px',
      fontWeight: 900,
    },
  },
  [TEXT_STYLE_NAME.subtitle1]: {
    fontSize: '30px',
    fontWeight: 800,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '22px',
      fontWeight: 800,
    },
  },
  [TEXT_STYLE_NAME.subtitle2B]: {
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '20px',
      fontWeight: 700,
    },
  },
  [TEXT_STYLE_NAME.subtitle2R]: {
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '20px',
      fontWeight: 500,
    },
  },
  [TEXT_STYLE_NAME.subtitle3]: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '18px',
      fontWeight: 700,
    },
  },

  [TEXT_STYLE_NAME.body1B]: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '18px',
      fontWeight: 700,
    },
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '18px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '18px',
      fontWeight: 700,
    },
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.body3]: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.caption]: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '12px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.button1B]: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '12px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.button1R]: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '18px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.button2B]: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
      fontWeight: 700,
    },
  },
  [TEXT_STYLE_NAME.button2R]: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.button3R]: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  [TEXT_STYLE_NAME.button4B]: {
    fontSize: '14px',
    fontWeight: 800,
    lineHeight: 'normal',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '13px',
      fontWeight: 800,
    },
  },
  [TEXT_STYLE_NAME.description]: {
    fontSize: '25px',
    fontWeight: 500,
    lineHeight: '160%',
    [`@media ${MEDIA_QUERY.tabletLg}`]: {
      fontSize: '20px',
    },
    [`@media ${MEDIA_QUERY.tabletSm}`]: {
      fontSize: '20px',
    },
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
    },
  },
};
