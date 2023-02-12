import * as styles from './TitleBox.css';

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
    <div className={styles.titleBox['box']}>
      <span className={styles.titleBox['title']}>{props.title}</span>
      <span className={styles.titleBox['subtitle']}>{props.subtitle}</span>
    </div>
  );
};

export default TitleBox;
