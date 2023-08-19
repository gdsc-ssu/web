const BREAK_POINTS = [600, 960, 1280] as const;

/**
 * media query 적용 기준 값
 */
export const MEDIA_QUERY = {
  mobile: `screen and (max-width: ${BREAK_POINTS[0]}px)`,
  tabletSm: `screen and (min-width: ${BREAK_POINTS[0]}px) and (max-width: ${BREAK_POINTS[1]}px)`,
  tabletLg: `screen and (min-width: ${BREAK_POINTS[1]}px) and (max-width: ${BREAK_POINTS[2]}px)`,
  pc: `screen and (min-width: ${BREAK_POINTS[2]}px )`,
} as const;
