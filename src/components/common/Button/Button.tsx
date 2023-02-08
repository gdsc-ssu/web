import * as styles from './button.css';

interface Props {
  text: string;
  onClicking: (name: string) => void;
}

const Button = ({ text, onClicking }: Props) => {
  const handleClick = () => onClicking(text);
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};
export default Button;
