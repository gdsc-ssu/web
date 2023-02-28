import * as styles from './VisitorBox.css';

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
    <div className={styles.visitor['box']}>
      <span
        className={styles.visitor['title']}
      >{`${props.today} / ${props.sum}`}</span>
      <span className={styles.visitor['subtitle']}>명이 참여 중!</span>
    </div>
  );
};

export default VisitorBox;
