import { TEXT_STYLE_BUTTON_PC, TEXT_STYLE_BUTTON_MOBILE } from '../token';

interface Props extends React.ComponentProps<'button'> {
  backgroundColor: string;
  color: string;
  title: string;
}

/**
 * 테스트 중 사용될 일반 버튼
 */
const Button = ({ backgroundColor, color, title, ...buttonProps }: Props) => {
  return (
    <button {...buttonProps}>
      {title}
      <style jsx>{`
        button {
          border: none;
          background-color: ${backgroundColor};
          width: 90%;
          min-width: 270px;
          min-height: 50px;
          border-radius: 500px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 50px;

          font-size: ${TEXT_STYLE_BUTTON_PC.button4B.fontSize}px;
          font-weight: ${TEXT_STYLE_BUTTON_PC.button4B.fontWeight};
          font-family: 'SUIT Variable', sans-serif;
          white-space: pre-line;
          word-break: keep-all;
          text-align: center;
          color: ${color};
        }

        @media screen and (max-width: 500px) {
          button {
            font-size: ${TEXT_STYLE_BUTTON_MOBILE.button4B.fontSize}px;
            font-weight: ${TEXT_STYLE_BUTTON_MOBILE.button4B.fontWeight};
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
