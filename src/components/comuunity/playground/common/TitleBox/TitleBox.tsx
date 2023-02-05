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
          font-size: 30px;
          font-weight: 800;
        }

        div > span:nth-child(2) {
          font-size: 18px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default TitleBox;
