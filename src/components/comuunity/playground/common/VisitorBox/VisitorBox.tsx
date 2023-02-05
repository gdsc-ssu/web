interface Props {
  today: number;
  sum: number;
}

/**
 * 방문자 수를 보여주는 컴포넌트
 * @param today 오늘 방문자
 * @param sum 총 방문자
 */
const VisitorBox = (props: Props) => {
  return (
    <div>
      <span>{`${props.today} / ${props.sum}`}</span>
      <span>명이 참여 중!</span>
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
          padding: 5px 10px;
          background-color: black;
          font-size: 10px;
          font-weight: 400;
          border-radius: 5px;
          cursor: default;
        }

        div > span:nth-child(2) {
          font-size: 12px;
          font-weight: 5600;
        }
      `}</style>
    </div>
  );
};

export default VisitorBox;
