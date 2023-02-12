import Wrapper from '../Wrapper';
import StartPage from './StartPage';
import PlayPage from './PlayPage';
import { useState } from 'react';
import { COLORS } from '../common/token';

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
    <div className="devtest__page">
      <Wrapper topColor={COLORS.SSU.Blue} bottomColor={COLORS.SSU.SkyBlue}>
        <CurrentPage onEnd={goToNextStep} />
      </Wrapper>
      <style jsx>{`
        .devtest__page {
          padding: 0;
          margin: 0;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default DevTestPage;
