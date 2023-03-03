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
  const handleMouseEnter = (
    e: React.MouseEvent<SVGRectElement, MouseEvent>,
  ) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = bounds.left - bounds.width * 0.5; // TODO: 툴팁 위치 변경 -> * 0.1 * 0.9
    const y = bounds.top - bounds.height * 2.7;
    onMouseEnter?.(x, y, infoText);
  };

  return (
    <rect
      data-level={level}
      className={styles.grassGraphItemStyle[level]}
      x={x}
      y={y}
      rx="2"
      ry="2"
      width="13"
      height="13"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {infoText}
    </rect>
  );
};

export default GrassGraphItem;
