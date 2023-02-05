import { TEXT_STYLE_TITLE_PC, TEXT_STYLE_TITLE_MOBILE } from '../token';

interface Props {
  title: string;
  subtitle: string;
}

/**
 * 플레이그라운드 전용 타이틀 박스
 * @param title 타이틀 첫 줄 (eg. 개발자 성향테스트)
 * @param subtitle 타이틀 두 번째 줄
 */
const TitleBox = (props: Props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: white;
        }

        div > span:nth-child(1) {
          font-size: ${TEXT_STYLE_TITLE_PC.title.fontSize}px;
          font-weight: ${TEXT_STYLE_TITLE_PC.title.fontWeight};
        }

        div > span:nth-child(2) {
          font-size: ${TEXT_STYLE_TITLE_PC.subtitle3.fontSize}px;
          font-weight: ${TEXT_STYLE_TITLE_PC.subtitle3.fontWeight};
        }

        @media screen and (max-width: 500px) {
          div > span:nth-child(1) {
            font-size: ${TEXT_STYLE_TITLE_MOBILE.title.fontSize}px;
            font-weight: ${TEXT_STYLE_TITLE_MOBILE.title.fontWeight};
          }

          div > span:nth-child(2) {
            font-size: ${TEXT_STYLE_TITLE_MOBILE.subtitle3.fontSize}px;
            font-weight: ${TEXT_STYLE_TITLE_MOBILE.subtitle3.fontWeight};
          }
        }
      `}</style>
    </div>
  );
};

export default TitleBox;
