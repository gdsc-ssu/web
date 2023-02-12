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
        top: grassTipData.y - 5,
        left: grassTipData.x,
      }}
    >
      <div>{grassTipData.infoText}</div>
      <div className={styles.pointStyle}></div>
    </div>
  );
};

export default GrassTip;
