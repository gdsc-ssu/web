import { PlayPage, StartPage } from '@/components/community/index';
import { useState } from 'react';
import * as styles from '@/components/community/playground/playground.css';

const STAGES = [StartPage, PlayPage] as const;

/**
 * 개발자 성향테스트 페이지 최상위 Wrapper
 */
const DevTestPage = () => {
  const [stage, setStage] = useState(0);
  const CurrentPage = STAGES[stage];

  const goToNextStep = () => {
    setStage((prev) => prev + 1);
  };

  return (
    <div className={styles.devtestPage}>
      <div className={styles.wrapper['devtest']}>
        <CurrentPage onEnd={goToNextStep} />
      </div>
    </div>
  );
};

export default DevTestPage;
