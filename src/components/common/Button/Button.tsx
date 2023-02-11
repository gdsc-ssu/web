import * as styles from './button.css';

interface Props {
  text: string;
  onClickHandler: () => void;
}
const Button = (props: Props) => {
  return (
    <button className={styles.button} onClick={props.onClickHandler}>
      {props.text}
    </button>
  );
};

export default Button;
