import Wrapper from '../Wrapper';
import StartPage from './StartPage';
import { useState } from 'react';

/**
 * 개발자 성향테스트 페이지 최상위 Wrapper
 */
const DevTestPage = () => {
  const [stage, setStage] = useState(0);

  return (
    <div className="devtest__page">
      <Wrapper topColor="#00A4CA" bottomColor="#58C4C4">
        {stage === 0 ? <StartPage setStage={setStage} /> : <></>}
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
