interface Props {
  children: React.ReactNode;
  /** 왼쪽 상단 색상 색상 코드(eg. #00A4CA) */
  topColor: string;
  /** 우측 하단 색상 색상 코드 */
  bottomColor: string;
}

/**
 * 모바일 중심형 페이지 Wrapper Component
 */
const Wrapper = (props: Props) => {
  return (
    <div className="container">
      {props.children}
      <style jsx>{`
        .container {
          width: 31.2vw;
          min-height: 100vh;
          height: 100vh;
          background: linear-gradient(
            135deg,
            ${props.topColor},
            ${props.bottomColor}
          );
          overflow-x: hidden;
        }

        @media screen and (min-width: 500px) {
          .container {
            min-width: 500px;
          }
        }

        @media screen and (max-width: 500px) {
          .container {
            width: 100vw;
            height: calc(var(--var, 1vh) * 100);
          }
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
