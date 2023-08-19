const BREAK_POINTS = [800, 1280] as const;

/**
 * media query 적용 기준 값
 */
export const MEDIA_QUERY = {
  mobile: `screen and (max-width: ${BREAK_POINTS[0]}px)`,
  tablet: `screen and (min-width: ${BREAK_POINTS[0]}px) and (max-width: ${BREAK_POINTS[1]}px)`,
  pc: `screen and (min-width: ${BREAK_POINTS[1]}px )`,
} as const;
