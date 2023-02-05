interface Props {
  backgroundColor: string;
  color: string;
  title: string;
  onClickHandler: () => void;
}
/**
 * 테스트 중 사용될 일반 버튼
 * @param backgroundColor 배경색
 * @param color 글자색
 * @param title 버튼 텍스트
 * @param onClickHandler 클릭 이벤트핸들러
 */
const Button = (props: Props) => {
  return (
    <button onClick={props.onClickHandler}>
      {props.title}
      <style jsx>{`
        button {
          border: none;
          background-color: ${props.backgroundColor};
          width: 90%;
          min-width: 270px;
          min-height: 50px;
          border-radius: 500px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 50px;

          font-size: 14px;
          font-weight: 600;
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

export default Button;
