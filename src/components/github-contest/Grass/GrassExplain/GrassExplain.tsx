import Link from 'next/link';
import GrassGraphItem, {
  GrassLevelType,
} from '@/components/github-contest/Grass/GrassGraph/GrassGraphItem';
import * as styles from './GrassExplain.css';

// TODO: 커밋 개수 가져오는 로직 설명 링크 추가 (노션 or new page)
const GrassExplain = () => {
  const levels = [0, 1, 2, 3, 4] as GrassLevelType[];

  return (
    <div className={styles.explainWrapper}>
      <Link className={styles.explainLinkStyle} href="/">
        Learn how we count commits
      </Link>
      <div className={styles.colorExampleWrapperStyle}>
        <span>Less</span>
        <div className={styles.colorExampleStyle}>
          {levels.map((level) => {
            return (
              <svg
                className={styles.colorExampleItemStyle}
                width="10"
                height="10"
                key={level}
              >
                <GrassGraphItem level={level} />
              </svg>
            );
          })}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GrassExplain;
