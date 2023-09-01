import { COLORS } from '@/constants/styles';
import * as styles from './RecruitSection.css';
import UnderScore from '@/assets/icons/UnderScore.svg';
import Flower from '@/assets/icons/Flower.svg';
import ArrowTop from '@/assets/icons/ArrowTop.svg';
import Link from 'next/link';

const RecruitSection = () => (
  <section className={styles.container}>
    <span className={styles.titleText}>
      <span className={styles.textWithUnderscore}>
        세상을 바꿀 수 있다
        <UnderScore
          className={styles.underscoreIcon}
          color={COLORS.primary.green}
        />
        <Flower className={styles.flowerIcon} color={COLORS.primary.green} />
      </span>
      고
      <br />
      믿는 학생 개발자와
      <br />
      함께 합니다.
    </span>
    <Link
      href="https://forms.gle/LyodekmPLy57beVr8"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button className={styles.button}>
        <span className={styles.buttonText}>Apply</span>
      </button>
    </Link>
    <div className={styles.descriptionWrap}>
      <ArrowTop className={styles.arrowIcon} color={COLORS.primary.green} />
      <span className={`${styles.hipiText} hipi`}>
        3기 모집
        <br />
        2023.09.02 ~<br />
        2023.09.10
      </span>
    </div>
  </section>
);

export default RecruitSection;
