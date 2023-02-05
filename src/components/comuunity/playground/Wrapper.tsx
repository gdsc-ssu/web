/**
 * 모바일 중심형 페이지 Wrapper Component
 */
const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <div className="container">
      {props.children}
      <style jsx>{`
        .container {
          width: 31.2vw;
          min-height: 100vh;
          background-color: white;

          @media screen and (min-width: 500px) {
            min-width: 500px;
          }

          @media screen and (max-width: 500px) {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
