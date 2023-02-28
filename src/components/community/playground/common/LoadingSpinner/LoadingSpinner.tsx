import * as styles from './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.Loader} />
      <div className={styles.waviy['container']}>
        <span className={styles.waviy['text1']}>G</span>
        <span className={styles.waviy['text2']}>D</span>
        <span className={styles.waviy['text3']}>S</span>
        <span className={styles.waviy['text4']}>C</span>
      </div>
      <span className={styles.Text['subtext']}>결과를 확인 중 입니다.</span>
    </div>
  );
};
('#0dc5c1');
export default LoadingSpinner;
