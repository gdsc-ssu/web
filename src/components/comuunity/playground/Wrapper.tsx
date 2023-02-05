interface Props {
  children: React.ReactNode;
  topColor: string;
  bottomColor: string;
}

/**
 * 모바일 중심형 페이지 Wrapper Component
 * @param topColor 왼쪽 상단 색상 헥사코드(eg. #00A4CA)
 * @param bottomColor 우측 하단 색상 헥사코드
 */
const Wrapper = (props: Props) => {
  return (
    <div className="container">
      {props.children}
      <style jsx>{`
        .container {
          width: 31.2vw;
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            ${props.topColor},
            ${props.bottomColor}
          );
        }

        @media screen and (min-width: 500px) {
          .container {
            min-width: 500px;
          }
        }

        @media screen and (max-width: 500px) {
          .container {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
