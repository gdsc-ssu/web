import * as styles from './Button.css';

const Themes = ['black', 'white', 'blue', 'result', 'gradient'] as const;

interface Props extends React.ComponentProps<'button'> {
  /**0번 : 블랙 테마
   * 1번 : 화이트 테마
   * 2번 : 블루 테마
   * 3번 : 결과 버튼
   * 4번 : 그라디언트
   */
  selected: number;
  title: string;
}

/**
 * 테스트 중 사용될 일반 버튼
 */
const Button = ({ selected, title, ...buttonProps }: Props) => {
  const Theme = Themes[selected];

  return (
    <button {...buttonProps} className={styles.button[Theme]}>
      {title}
    </button>
  );
};

export default Button;
