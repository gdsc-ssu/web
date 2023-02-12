import { StartButton, TitleBox, VisitorBox } from '../common';
import * as styles from './devtest.css';
import { devTestLogo } from '@/resources/communityRes';
import type { StepProps } from './types';

interface Props extends StepProps {}

/**
 * 시작하기 버튼이 있는 테스트 시작 페이지
 */
const StartPage = (props: Props) => {
  const { onEnd } = props;
  return (
    <div className={styles.firstPage}>
      <TitleBox
        title="개발자 성향테스트"
        subtitle="과연 나는 어떤 개발자일까? "
      />
      <VisitorBox today={10} sum={100} />
      <StartButton theme={0} title="시작하기" onClick={() => onEnd()} />
      <span className={styles.text['title']}>GDSC Soongsil Univ.</span>
      <img className={styles.decoImg} src={devTestLogo} alt="devtest-logo" />
    </div>
  );
};

export default StartPage;
