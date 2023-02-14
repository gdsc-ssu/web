import * as styles from './ProgressBar.css';

interface Props {
  curIdx: number;
}

const ProgressBar = ({ curIdx }: Props) => {
  return (
    <div className={styles.progress['outer']}>
      <div className={styles.progress[`inner__${curIdx}`]} />
    </div>
  );
};

export default ProgressBar;
