import { DayInfo, MonthInfo, MonthTxtTrans } from '@/constants/date';
import { CountType } from '@/constants/github';
import GrassGraphItem from './GrassGraphItem';
import * as styles from './GrassGraph.css';

export interface GrassGraphDataType {
  date: Date;
  count: number;
}

export interface GrassGraphPropsType {
  data: GrassGraphDataType[];
  onMouseEnter?: (x?: number, y?: number, infoText?: string) => void;
  onMouseLeave?: () => void;
}

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 8) return 3;
  if (count >= 9) return 4;
  return 0;
}

// TODO: 디자인에 따라 rectX, rectY 이동값 반영
const GrassGraph = ({
  data,
  onMouseEnter,
  onMouseLeave,
}: GrassGraphPropsType) => {
  const grass = () => {
    let rectX = 45;

    const monthArea = [] as JSX.Element[]; // 상단의 월 표시
    const dayArea = [] as JSX.Element[]; // 좌측의 요일 표시

    const grassGraphArea = data?.map(({ date, count }, idx) => {
      const thisYear = date.getFullYear();
      const thisMonth = date.getMonth();
      const thisDate = date.getDate();
      const thisDay = date.getDay();

      // 텍스트 (2 commits on January 19, 2023)
      const dateInfo = `${MonthTxtTrans[thisMonth]} ${thisDate}, ${thisYear}`;
      const countInfo =
        count > 1 ? `${count} ${CountType}s` : `${count} ${CountType}`; // 복수 처리
      const infoText = `${countInfo} on ${dateInfo}`;

      // 위치
      if (thisDay === 0 && idx !== 0) {
        rectX += 19; // 일요일 나올 때마다 우로 이동
      }
      const rectY = 30 + thisDay * 19;
      const monthY = 20;
      const dayY = rectY + 10;

      // 색상 기준 레벨
      const level = getLevel(count);
      if ((thisDay === 1 || thisDay === 3 || thisDay === 5) && idx < 7) {
        dayArea.push(
          <text
            x={0}
            y={dayY}
            key={thisDay}
            className={styles.grassGraphFontStyle}
          >
            {DayInfo[thisDay]}
          </text>,
        );
      }

      if (thisDate === 1) {
        monthArea.push(
          <text
            x={rectX}
            y={monthY}
            key={thisMonth}
            className={styles.grassGraphFontStyle}
          >
            {MonthInfo[thisMonth]}
          </text>,
        );
      }

      return (
        <GrassGraphItem
          infoText={infoText}
          x={rectX}
          y={rectY}
          key={dateInfo}
          level={level}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    });

    return (
      <>
        <g>{dayArea}</g>
        <g>{monthArea}</g>
        <g>{grassGraphArea}</g>
      </>
    );
  };

  return (
    <div className={styles.grassGraphBaseStyle}>
      <svg className={styles.grassGraphSvgStyle}>{grass()}</svg>
    </div>
  );
};

export default GrassGraph;
