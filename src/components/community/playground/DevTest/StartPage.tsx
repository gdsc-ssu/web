import { StartButton, TitleBox, VisitorBox } from '../common';
import {
  COLORS,
  TEXT_STYLE_BODY_PC,
  TEXT_STYLE_BODY_MOBILE,
} from '../common/token';
import { devTestLogo } from '@/resources/communityRes';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
}

/**
 * 시작하기 버튼이 있는 테스트 시작 페이지
 */
const StartPage = (props: Props) => {
  return (
    <div className="devtest__first-page">
      <TitleBox
        title="개발자 성향테스트"
        subtitle="과연 나는 어떤 개발자일까? "
      />
      <VisitorBox today={10} sum={100} />
      <StartButton
        color={COLORS.SSU.DeepBlue}
        title="시작하기"
        onClickHandler={() => props.setStage((prev) => prev + 1)}
      />
      <span>GDSC Soongsil Univ.</span>
      <img src={devTestLogo} alt="devtest-logo" />
      <style jsx>{`
        .devtest__first-page {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 30px;
          padding-top: 80px;
        }
        span {
          color: white;
          font-size: ${TEXT_STYLE_BODY_PC.body2B.fontSize};
          font-weight: ${TEXT_STYLE_BODY_PC.body2B.fontWeight};
        }
        img {
          width: 65%;
          height: auto;
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }

        @media screen and (max-width: 500px) {
          span {
            color: white;
            font-size: ${TEXT_STYLE_BODY_MOBILE.body2B.fontSize};
            font-weight: ${TEXT_STYLE_BODY_MOBILE.body2B.fontWeight};
          }
        }

        @media screen and (min-height: 800px) {
          .devtest__first-page {
            padding-top: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default StartPage;
