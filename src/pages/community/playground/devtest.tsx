import { PlayPage, StartPage, ResultPage } from '@/components/community/index';
import { useState } from 'react';
import * as styles from '@/components/community/playground/playground.css';
import { DevType } from '@/resources/devTestQustions';

const STAGES = [StartPage, PlayPage, ResultPage] as const;

/**
 * 개발자 성향테스트 페이지 최상위 Wrapper
 */
const DevTestPage = () => {
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState<DevType>();
  const CurrentPage = STAGES[stage];

  const goToNextStep = () => {
    setStage((prev) => prev + 1);
  };

  const saveResult = (res: DevType) => {
    setResult(res);
  };

  return (
    <div className={styles.devtestPage}>
      <div className={styles.wrapper['devtest']}>
        <CurrentPage
          onEnd={goToNextStep}
          saveResult={saveResult}
          result={result}
        />
      </div>
    </div>
  );
};

export default DevTestPage;
