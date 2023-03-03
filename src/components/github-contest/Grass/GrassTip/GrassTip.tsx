import * as styles from './GrassTip.css';

export interface GrassTipDataType {
  x: number;
  y: number;
  infoText: string;
  isHover: boolean;
}

export interface GrassTipPropsType {
  grassTipData: GrassTipDataType;
}

// TODO: style
const GrassTip = ({ grassTipData }: GrassTipPropsType) => {
  const displayType = grassTipData.isHover ? 'block' : 'none';
  return (
    <div
      className={styles.grassTipStyle[displayType]}
      style={{
        top: grassTipData.y - 52,
        left: grassTipData.x - 20,
      }}
    >
      <div>{grassTipData.infoText}</div>
      <div
        className={styles.pointStyle}
        style={{
          top: grassTipData.y + 30 - 52,
          left: grassTipData.x - 5,
        }}
      ></div>
    </div>
  );
};

export default GrassTip;
