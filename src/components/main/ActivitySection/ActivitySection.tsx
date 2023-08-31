import SectionWrapper from '../SectionWrapper';
import UnderScore from '@/assets/icons/UnderScore.svg';
import Pencil from '@/assets/icons/Pencil.svg';
import * as styles from './ActivitySection.css';
import { COLORS } from '@/constants/styles';
import { EventItem, SeminarItem, StudyItem } from './Slider';
import {
  type MotionValue,
  useScroll,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { type ReactNode, useRef, useState } from 'react';
import { m } from 'framer-motion';

interface SectionProps {
  title: string;
  description: string;
  opacity: MotionValue<number>;
  zIndex: number;
  isFirst?: boolean;
  childrenContainerClassName?: string;
  children: ReactNode;
}

const Section = ({
  title,
  description,
  opacity,
  zIndex,
  isFirst,
  childrenContainerClassName,
  children,
}: SectionProps) => (
  <div
    className={styles.sectionContainer}
    style={{ position: 'sticky', top: 0, zIndex }}
  >
    <SectionWrapper reverse className={styles.wrapper}>
      <div className={styles.title} style={{ opacity: isFirst ? 1 : 0 }}>
        <span className={styles.textWrapper}>
          <span className={styles.textWithUnderscore}>
            함께 한 경험
            <UnderScore
              className={styles.underscoreIcon}
              color={COLORS.primary.blue}
            />
          </span>
          <span>은</span>
        </span>

        <span>배움의 가치를</span>
        <span>더합니다.</span>
        <Pencil className={styles.pencilIcon} color={COLORS.primary.blue} />
      </div>
      <m.div className={styles.description} style={{ opacity }}>
        <span className={`${styles.hipiText} hipi`}>{title}</span>
        {description}
      </m.div>
    </SectionWrapper>
    <m.div className={childrenContainerClassName} style={{ opacity }}>
      {children}
    </m.div>
  </div>
);

const SEMINARS = [
  '4e23-Ynlzqs',
  'NPCGmMlgd-4',
  'WtKgwYSdpiU',
  'v8123gq10Dk',
  'ej38zi7fFlo',
  '4wkc5dOaETQ',
  'zuRt0z577bA',
  '91mxaLdf3hA',
  'yqY8yS-mnnE',
  'TkFhMGZkTZ8',
  'WHHUAYZ9TKc',
  'lc-9Uh9euls',
  'cmY_MUvXenc',
  'sdX1mRHHmtQ',
  'cfKiAwfU1MI',
  'ur5A49htfwg',
  'PdHaGwSN1oA',
  'yTDyakMnkjo',
  '3IZoa7xc94Q',
  'aiPx-W5Ix2M',
  'loGCro25HPk',
  'cBUi6dayhx4',
  '13C9dI_Cl4w',
  'M109cdUPPNA',
  '3PK19rufFcg',
  'HEUpzIs3xKE',
  '1pT2Bkkvou8',
] as const;

console.log(SEMINARS.length);

const SEMINARS_FOR_SLIDER = [...SEMINARS, ...SEMINARS];

const STUDIES = [
  {
    title: '프레임워크 없는 프론트엔드 개발',
    description: '여러 프레임워크에 대해 학습 및 논의',
    thumbnail: '/study_frontend.jpg',
    tags: ['study'],
  },
  {
    title: '만약',
    description: '친구와 쉽게 약속을 잡을 수 있는 서비스',
    thumbnail: '/project_manyaak.png',
    tags: ['project'],
    url: 'https://github.com/manyaak/manyaak-front',
  },
  {
    title: 'MSA 스터디',
    description: '[그림으로 공부하는 마이크로 서비스 구조] 독서',
    thumbnail: '/study_msa.png',
    tags: ['study'],
  },
  {
    title: '부엉이 우편함',
    description: 'GPS를 기반으로 한 익명 우편함',
    thumbnail: '/project_owl-box.png',
    tags: ['project'],
    url: 'https://github.com/gdsc-ssu/gdsc-owl-mailbox-front',
  },
  {
    title: '도커에 주저하는 사람들을 위한 생존형 도커 스터디!',
    description: '[도커 교과서] 독서 및 리뷰',
    thumbnail: '/study_docker.png',
    tags: ['study'],
  },
  {
    title: '사실;',
    description: '개인의 사소한 실험을 공유하는 플랫폼',
    thumbnail: '/project_sasil.png',
    tags: ['project'],
    url: 'https://github.com/gdsc-ssu/sasil-front',
  },
  {
    title: 'Javascript Challenge',
    description: '10개의 자바스크립트 프로젝트 제작하기',
    thumbnail: '/study_js-challenge.png',
    tags: ['study'],
  },
  {
    title: 'Emotimer',
    description: '웹소켓을 이용한 다중기기 동시 타이머',
    thumbnail: '/project_emotimer.png',
    tags: ['project'],
    url: 'https://github.com/gdsc-ssu/emotimer',
  },
  {
    title: 'WOW MEET',
    description: '로그인 없이 1분만에 끝내는 초 간단 일정 조율',
    thumbnail: '/project_wowmeet.png',
    tags: ['project'],
  },
  {
    title: '세상을 바꾸는 프론트엔드',
    description: '프론트엔드의 자유 주제 발제, 토론',
    thumbnail: '/study_typescript.png',
    tags: ['study'],
  },
  {
    title: '여자친구(생기면 갈 곳) API',
    description: '여자친구가 생기면 갈 곳을 CLI로 찾아보자!',
    thumbnail: '/project_up-date.png',
    tags: ['project'],
    url: 'https://github.com/gdsc-ssu/up-date-cli',
  },
];

const STUDIES_FOR_SLIDER = [...STUDIES, ...STUDIES];

const EVENTS = [
  {
    image: '/event_escape.jpeg',
    url: 'https://www.instagram.com/p/CV7gvPzvRnk',
  },
  {
    image: '/event_senior-seminar.jpeg',
    url: 'https://www.instagram.com/p/CWHyKsIvbiv',
  },
  {
    image: '/event_debate.jpeg',
    url: 'https://www.instagram.com/p/CbpxVsSvRDK/',
  },
  {
    image: '/event_gdsc-career.jpeg',
    url: 'https://www.instagram.com/p/CfWjWDalMh4',
  },
  {
    image: '/event_festival.jpg',
    url: 'https://www.instagram.com/p/Cgx1YZzvhpB',
    imageAlign: 'top',
  },
  {
    image: '/event_solution-challenge.jpeg',
    url: 'https://developers.google.com/community/gdsc-solution-challenge?hl=ko',
  },
  {
    image: '/event_ideathon.jpeg',
    url: 'https://www.instagram.com/p/CwSWDYAvbsJ',
  },
  {
    image: '/event_job-fair.jpeg',
    url: 'https://www.instagram.com/p/CwSXa7vPnp7',
  },
  {
    image: '/event_devcon.jpg',
    url: 'https://www.instagram.com/p/CwSYnl7vSLh/',
    imageAlign: 'bottom',
  },
] as const;

const EVENTS_FOR_SLIDER = [...EVENTS, ...EVENTS];

const ActivitySection = () => {
  const [zIndex, setZIndex] = useState([5, 1, 1]);

  const scrollTargetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['end end', 'start start'],
  });
  const realScrollYProgress = useMotionValue(1);
  scrollYProgress.onChange((v) => realScrollYProgress.set(v));
  realScrollYProgress.onChange((v) => {
    if (v > 3 / 4) {
      setZIndex([5, 1, 1]);
    } else if (v > 1 / 4) {
      setZIndex([1, 5, 1]);
    } else {
      setZIndex([1, 1, 5]);
    }
  });

  const thirdSectionOpacity = useTransform(realScrollYProgress, (latest) =>
    Math.max(latest > 0 ? -4 * latest + 1 : 1, 0),
  );
  const secondSectionOpacity = useTransform(realScrollYProgress, (latest) =>
    Math.max(
      latest >= 1 / 2 ? -4 * (latest - 1 / 2) + 1 : 4 * (latest - 1 / 2) + 1,
      0,
    ),
  );
  const firstSectionOpacity = useTransform(realScrollYProgress, (latest) =>
    Math.max(latest >= 1 ? 1 : 4 * (latest - 1) + 1, 0),
  );

  return (
    <section ref={scrollTargetRef} className={styles.container}>
      <Section
        title="슈몰세미나"
        description={
          '슈몰세미나는 모든 멤버가 최소 한 번 직접 주제를 정하고 발표하는 내부 세미나 활동입니다. 꼭 프로그래밍이 아니어도 여행 경험이나 관심사 등 다양한 주제로 발표할 수 있습니다.'
        }
        opacity={firstSectionOpacity}
        isFirst
        childrenContainerClassName={styles.seminarSlider}
        zIndex={zIndex[0]}
      >
        {SEMINARS_FOR_SLIDER.map((seminar, seminarIndex) => (
          <SeminarItem key={seminarIndex} youtubeVideoId={seminar} />
        ))}
      </Section>
      <Section
        title="스터디 & 프로젝트"
        description="내부에서 다양하고 재미있는 주제로 스터디와 프로젝트가 활발하게 개설됩니다. 함께 할 때 가치가 높아지는 것이라면 그 어떤 주제도 환영합니다."
        opacity={secondSectionOpacity}
        childrenContainerClassName={styles.studySlider}
        zIndex={zIndex[1]}
      >
        {STUDIES_FOR_SLIDER.map((study, studyIndex) => (
          <StudyItem key={studyIndex} {...study} />
        ))}
      </Section>
      <Section
        title="커뮤니티 활동"
        description="개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께 합니다. 세미나, 대회, MT, Code Jam 등 한계 없이 다양한 범위의 이벤트를 개최합니다."
        opacity={thirdSectionOpacity}
        childrenContainerClassName={styles.eventSlider}
        zIndex={zIndex[2]}
      >
        {EVENTS_FOR_SLIDER.map((event, eventIndex) => (
          <EventItem key={eventIndex} {...event} />
        ))}
      </Section>
    </section>
  );
};

export default ActivitySection;
