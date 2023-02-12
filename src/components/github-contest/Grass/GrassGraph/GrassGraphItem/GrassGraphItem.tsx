import * as styles from './GrassGraphItem.css';

export type GrassLevelType = 0 | 1 | 2 | 3 | 4;

export interface GrassGraphItemPropsType {
  level: GrassLevelType;
  infoText?: string;
  x?: number;
  y?: number;
  onMouseEnter?: (x?: number, y?: number, infoText?: string) => void;
  onMouseLeave?: () => void;
}

const GrassGraphItem = ({
  level,
  infoText,
  x,
  y,
  onMouseEnter,
  onMouseLeave,
}: GrassGraphItemPropsType) => {
  return (
    <rect
      data-level={level}
      className={styles.grassGraphItemStyle[level]}
      x={x}
      y={y}
      rx="2"
      ry="2"
      width="10"
      height="10"
      onMouseEnter={() => onMouseEnter?.(x, y, infoText)}
      onMouseLeave={onMouseLeave}
    >
      {infoText}
    </rect>
  );
};

export default GrassGraphItem;
