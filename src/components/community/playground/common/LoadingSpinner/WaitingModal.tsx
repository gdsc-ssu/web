import LoadingSpinner from './LoadingSpinner';
import * as styles from './WaitingModal.css';

const WaitingModal = () => {
  return (
    <div className={styles.Modal['container']}>
      <LoadingSpinner />
    </div>
  );
};

export default WaitingModal;
