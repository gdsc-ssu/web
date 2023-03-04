import { StartButton, TitleBox, VisitorBox } from '../common';
// TODO: devtest, fortune css 를 공통으로 뺴도 좋을 것 같아용 일단은 감사한 마음으로 가져다가 .....
import * as styles from '../DevTest/devtest.css';
import { devTestLogo } from '@/resources/communityRes';
import Image from 'next/image';

const FortuneStartPage = () => {
  return (
    <div className={styles.firstPage}>
      <TitleBox title="오늘의 포춘쿠키" subtitle="오늘 나의 하루는 어떨까?" />
      <StartButton theme={1} title="생년월일로 알아보기" onClick={() => {}} />

      <span className={styles.decoImg}>
        <Image fill src={devTestLogo} alt="fortune-cookit-logo"></Image>
      </span>
      <VisitorBox today={10} sum={100} />
    </div>
  );
};

export default FortuneStartPage;
