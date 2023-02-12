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

// TODO: x,y값에 따라 표시되는 위치 변경하기
const GrassTip = ({ grassTipData }: GrassTipPropsType) => {
  const displayType = grassTipData.isHover ? 'block' : 'none';
  return (
    <div className={styles.grassTipStyle[displayType]}>
      {grassTipData.infoText}
    </div>
  );
};

export default GrassTip;
