import { useCallback, useState } from 'react';

import { CountType } from '@/constants/github';
import GrassGraph, { GrassGraphDataType } from './GrassGraph';
import GrassTip, { GrassTipDataType } from './GrassTip';
import GrassExplain from './GrassExplain';

import * as styles from './Grass.css';

export interface GrassPropsType {
  data: GrassGraphDataType[];
}

const Grass = ({ data }: GrassPropsType) => {
  const [grassTipData, setGrassTipData] = useState<GrassTipDataType>({
    x: 0,
    y: 0,
    infoText: '',
    isHover: false,
  });

  const totalCount = data.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  const onMouseEnter = useCallback(
    (x?: number, y?: number, infoText?: string) => {
      if (x === undefined || y === undefined || infoText === undefined) {
        return;
      }

      setGrassTipData((prev) => ({
        ...prev,
        x,
        y,
        infoText,
        isHover: true,
      }));
    },
    [],
  );

  const onMouseLeave = useCallback(() => {
    setGrassTipData((prev) => ({
      ...prev,
      isHover: false,
    }));
  }, []);

  return (
    <div className={styles.grassWrapperStyle}>
      <div
        className={styles.grassInfoStyle}
      >{`${totalCount} ${CountType}s in the last year`}</div>
      <GrassGraph
        data={data}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <GrassExplain />
      <GrassTip grassTipData={grassTipData} />
    </div>
  );
};

export default Grass;
