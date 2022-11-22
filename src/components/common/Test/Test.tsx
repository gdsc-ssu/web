import * as styles from './Test.css';

interface Props {
  text?: string;
}

const Test = ({ text }: Props) => <p className={styles.text}>{text}</p>;

export default Test;
