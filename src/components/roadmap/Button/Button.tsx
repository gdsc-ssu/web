import * as styles from './button.css';

const Themes = [
  'frontEnd',
  'git',
  'crossFlatform',
  'ServerCloud',
  'AIML',
  'DevOps',
  'base',
] as const;

interface Props extends React.ComponentProps<'button'> {
  /**0번 : FE
   * 1번 : git
   * 2번 : Cross Platform
   * 3번 : Server/Cloud
   * 4번 : AI/ML
   * 5번 : DevOps
   * 6번 : base
   */
  selected: number;
  title: string;
  clicked: boolean;
  onClick: () => void;
}

const Button = ({
  clicked,
  selected,
  title,
  onClick,
  ...buttonProps
}: Props) => {
  const Theme = Themes[selected];
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      className={clicked ? styles.buttonActive[Theme] : styles.button}
    >
      {title}
    </button>
  );
};

export default Button;
