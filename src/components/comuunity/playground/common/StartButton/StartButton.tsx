interface Props {
  color: string; //글자색
  title: string; //버튼 텍스트
  onClickHandler: () => void;
}

/**
 * 플레이그라운드에서 사용하는 시작버튼
 * @param color 글자색
 * @param title 버튼 텍스트
 * @param onClickHandler 클릭 이벤트핸들러
 */
const StartButton = (props: Props) => {
  return (
    <button onClick={props.onClickHandler}>
      {props.title}
      <style jsx>{`
        button {
          border: none;
          background-color: white;
          width: 65%;
          min-width: 220px;
          height: 55px;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 50px;

          font-size: 20px;
          font-weight: 800;
          font-family: 'SUIT Variable', sans-serif;
          white-space: pre-line;
          word-break: keep-all;
          text-align: center;
          color: ${props.color};
        }
      `}</style>
    </button>
  );
};

export default StartButton;
