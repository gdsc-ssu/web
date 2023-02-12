import * as styles from './StartButton.css';

const Themes = ['devTest', 'fortune'] as const;

interface Props extends React.ComponentProps<'button'> {
  /** 0 : devTest
   * 1 : fortune
   * 둘 중 하나 */
  theme: number;
  title: string;
}

/**
 * 플레이그라운드에서 사용하는 시작버튼
 *
 */
const StartButton = ({ theme, title, ...buttonProps }: Props) => {
  const Theme = Themes[theme];
  return (
    <button {...buttonProps} className={styles.startBtn[Theme]}>
      {title}
    </button>
  );
};

export default StartButton;
