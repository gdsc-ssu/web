import {
  FortuneStartPage,
  FortuneInfoPage,
} from '@/components/community/index';
import { useState } from 'react';
// TODO
import * as styles from '@/components/community/playground/playground.css';

const STAGES = [FortuneStartPage, FortuneInfoPage] as const; //FortuneResultPage

/**
 * 포춘 페이지 최상위 Wrapper
 */
const FortuenPage = () => {
  const [stage, setStage] = useState(0);
  // const [result, setResult] = useState<DevType>();
  const CurrentPage = STAGES[stage];

  const goToNextStep = () => {
    setStage((prev) => prev + 1);
  };

  // const saveResult = (res: DevType) => {
  //   setResult(res);
  // };

  return (
    <div className={styles.fortunePage}>
      <div className={styles.wrapper['fortune']}>
        <CurrentPage onEnd={goToNextStep} />
      </div>
    </div>
  );
};

export default FortuenPage;
