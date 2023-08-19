import * as styles from './Test.css';

interface Props {
  text?: string;
}

const Test = ({ text }: Props) => (
  <div>
    <p className={styles.text}>{text}</p>
    <p className={`${styles.text} hipi`}>{text}</p>
  </div>
);

export default Test;
