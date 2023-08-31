import SectionWrapper from '../SectionWrapper';
import Star from '@/assets/icons/Star.svg';
import SmileFace from '@/assets/icons/SmileFace.svg';
import WorldWithFlag from '@/assets/icons/WorldWithFlag.svg';
import UnderScore from '@/assets/icons/UnderScore.svg';
import PaperAirplane from '@/assets/icons/PaperAirplane.svg';
import * as styles from './BrandSection.css';
import { COLORS } from '@/constants/styles';

const BrandSection = () => {
  return (
    <section className={styles.container}>
      <SectionWrapper className={styles.wrapper}>
        <div className={styles.title}>
          <span>실력 너머의</span>
          <span className={styles.textWrapper}>
            <span className={styles.textWithUnderscore}>
              유쾌함으로
              <UnderScore
                className={styles.underscoreIcon}
                color={COLORS.primary.red}
              />
            </span>
            <div className={styles.smileIconWrapper}>
              <SmileFace className={styles.smileIcon} />
            </div>
          </span>
          <span>세상을 바꿉니다.</span>
          <PaperAirplane className={styles.paperAirplaneIcon} />
        </div>
        <div className={styles.description}>
          GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는
          학생 개발자 커뮤니티입니다. 그 시너지의 배경에는, 서로 마음을 맞추어
          어떤 것도 함께라면 즐거운{' '}
          <span style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={`${styles.hipiText} hipi`}> 놀이</span>
              <span className={styles.iconWrapper}>
                <Star className={styles.textStarIcon} />
              </span>
            </div>
          </span>
          로 만드는 선한 친화력이 있습니다. 그리고 우리는 그 즐거움을 전염시켜{' '}
          <span style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={`${styles.hipiText} hipi`}> 세상</span>
              <span className={styles.iconWrapper}>
                <WorldWithFlag className={styles.textWorldWithFlagIcon} />
              </span>
            </div>
          </span>
          을 더 좋은 곳으로 만들 수 있다고 믿습니다.
        </div>
      </SectionWrapper>
    </section>
  );
};

export default BrandSection;
