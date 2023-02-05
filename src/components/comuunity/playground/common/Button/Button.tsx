import { TEXT_STYLE_BUTTON_PC, TEXT_STYLE_BUTTON_MOBILE } from '../token';

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

          font-size: ${TEXT_STYLE_BUTTON_PC.button3.fontSize}px;
          font-weight: ${TEXT_STYLE_BUTTON_PC.button3.fontWeight};
          font-family: 'SUIT Variable', sans-serif;
          white-space: pre-line;
          word-break: keep-all;
          text-align: center;
          color: ${props.color};
        }

        @media screen and (max-width: 500px) {
          button {
            font-size: ${TEXT_STYLE_BUTTON_MOBILE.button3.fontSize}px;
            font-weight: ${TEXT_STYLE_BUTTON_MOBILE.button3.fontWeight};
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
