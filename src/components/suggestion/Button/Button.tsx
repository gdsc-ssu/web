import * as styles from './button.css';

interface Props {
  content: string;
  from?: string;
  to?: string;
  clicked?: boolean;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
