import Wrapper from '../Wrapper';

/**
 * 개발자 성향테스트 페이지 최상위 Wrapper
 */
const DevTestPage = () => {
  return (
    <div className="devtest__page">
      <Wrapper>
        <></>
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
