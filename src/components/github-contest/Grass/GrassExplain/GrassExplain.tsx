import Link from 'next/link';
import GrassGraphItem, {
  GrassLevelType,
} from '@/components/github-contest/Grass/GrassGraph/GrassGraphItem';
import * as styles from './GrassExplain.css';

const GrassExplain = () => {
  const levels = [0, 1, 2, 3, 4] as GrassLevelType[];

  // TODO: 커밋 개수 가져오는 로직 설명 링크 추가 (노션 or new page)
  const explainURL = '/';

  return (
    <div className={styles.explainWrapper}>
      <Link className={styles.explainLinkStyle} href={explainURL}>
        Learn how we count commits
      </Link>
      <div className={styles.colorExampleWrapperStyle}>
        <span>Less</span>
        <svg className={styles.colorExampleStyle}>
          {levels.map((level) => {
            return (
              <GrassGraphItem x={level * 19} y={0} level={level} key={level} />
            );
          })}
        </svg>
        <span>More</span>
      </div>
    </div>
  );
};

export default GrassExplain;
