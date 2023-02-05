import { StartButton, Button, TitleBox, VisitorBox } from '../common';
/**
 * 시작하기 버튼이 있는 테스트 시작 페이지
 */
const StartPage = () => {
  return (
    <>
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
    </>
  );
};

export default StartPage;
