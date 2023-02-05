import { StartButton, Button, TitleBox, VisitorBox } from '../common';
import { devTestLogo } from '@/resources/communityRes';
/**
 * 시작하기 버튼이 있는 테스트 시작 페이지
 */
const StartPage = () => {
  return (
    <div className="devtest__first-page">
      <TitleBox
        title="개발자 성향테스트"
        subtitle="과연 나는 어떤 개발자일까? "
      />
      <VisitorBox today={10} sum={100} />
      <StartButton color="black" title="시작하기" onClickHandler={() => null} />
      <Button
        backgroundColor="black"
        color="white"
        title="나문희의 첫사랑"
        onClickHandler={() => null}
      />
      <img src={devTestLogo} alt="devtest-logo" />
      <style jsx>{`
        .devtest__first-page {
          width: 100%;
          height: 100%;
          position: relative;
        }
        img {
          width: 60%;
          height: auto;
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default StartPage;
