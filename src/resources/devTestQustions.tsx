export enum Part {
  WM = 'Web/Mobile',
  SC = 'Server/Cloud',
  AM = 'AI/ML',
}

export enum Dev {
  Vitamin,
  Artist,
  Planner,
  Fox,
  Fighter,
  Imagine,
}

export interface DevType {
  name: Dev;
  title: string;
  subtitle: string;
  type: string;
  part: Part;
  content: Array<string>;
}

export interface Questions {
  question: string;
  select: Array<Answer>;
}

export interface Answer {
  type: Array<DevType>;
  answer: string;
}

export const vitaminDev: DevType = {
  name: Dev.Vitamin,
  title: '놀기 위해 개발하는거 아니겠어?',
  subtitle: '회식이 제일 좋아! 노는게 제일 좋아!',
  type: '분위기 메이커 비타민 개발자',
  part: Part.WM,
  content: [
    '어디서든 인기만점인 당신은 비타민 같아요!',
    '팀 프로젝트가 너무 좋아요! 항상 설레요!',
    '아주 열심히 일하지만, 나에게 1순위늰 언제나 행복이에요.',
    '어둡고 칙칙한 것은 싫어. 생기있는게 좋아요.',
    '친구가 힘들바엔, 그냥 내가 힘든게 나아요. 버스기사 장인!',
    '나의 지친 모습은 아무에게도 보여주기 싫어요!',
  ],
};

export const artistDev: DevType = {
  name: Dev.Artist,
  title: '소피, 아름답지 않은면 살아도 산게 아니야.',
  subtitle: '섬세함과 완벽함은 나의 원동력!',
  type: '하울 스타일의 예술가 개발자',
  part: Part.WM,
  content: [
    '조용해 보이지만, 주변에 사람이 끊이질 않아요.',
    '디자인, 코드, 로그... 모두 깔끔하고 완벽해야해요.',
    '자기 계발을 위해 끊임없이 노력해요.',
    '순간의 소모적인 즐거움보단 미래까지 생각하는 편이에요!',
    '리더십이 짱짱하대요. 나는 모르겠지만 항상 팀플 조장이에요.',
    '나의 목표는 육각형 인재! 뭐든 잘 하고 싶어요.',
  ],
};

export const plannerDev: DevType = {
  name: Dev.Planner,
  title: '잠깐, 이건 내 계획에 없었는데...? 죽을게.',
  subtitle: '뭐든지 철저한 계획은 기본!',
  type: '인간 플래너 그 자체 개발자',
  part: Part.SC,
  content: [
    '가만히 있는 것 처럼 보여도, 머리는 쉬지 않아요.',
    '프로젝트 기획하고, 계획 짜는게 가장 재미있어요!',
    '인생 계획을 이루기 위해서 항상 노력하고 있어요.',
    '코드가 이상해도, 디자인이 별로여도 괜찮아요. 대신 기한은 지켜라...',
    '팀 리더가 되기 싫어요. 가뜩이나 생각할거 많은데!',
    '빠르게 변하는 유행은 나의 적이에요.',
  ],
};

export const foxDev: DevType = {
  name: Dev.Fox,
  title: '검은 화면에 코드를 적어내려가는 모습.. 멋있지? 반했지?',
  subtitle: '스타벅스에서 개발하는 모습 보여주면 다 나한테 반하더라...',
  type: '인간 퐉스 개발자',
  part: Part.SC,
  content: [
    '사람들이 무슨 생각하고 있는지 다 보이는걸요?',
    '무엇을 해야 사람들이 날 좋아하는지 알고있어요.',
    '머리가 비범한 편이라, 남들보다 적게 공부하고 많이 배워요.',
    '팀 리더? 귀찮지만 꽤 재밌어요.',
    '매력이 흘러 넘쳐요. 주변에는 항상 사람이 바글바글!',
    '느리고 비효율적인 것들을 싫어해요.',
  ],
};

export const fighterDev: DevType = {
  name: Dev.Fighter,
  title: '잠깐 나 궁금한거 있어, 아 아니 싸우자는거 아니야!',
  subtitle: '데브톡 얼마나 재밌게요~',
  type: '인간 100분 토론 개발자',
  part: Part.AM,
  content: [
    '하나에 집중하면 그것만 보여요. 아무것도 안들려요!',
    '뭔가에 꽂히기 전 까지는 일상이 지루해요.',
    '나와 다른 생각이 너무 궁금해요! 듣고 배우고 싶어요.',
    '더 완벽한 결과를 위해서라면 어려운 공부도 Easy해져요.',
    '느리고, 비효율적이어도 괜찮아요. 분명 배우는게 있거든요.',
    '남들의 칭찬보다는 나의 만족이 중요한 완벽주의자예요.',
  ],
};

export const imagineDev: DevType = {
  name: Dev.Imagine,
  title: '(개발자 성향 테스트하다가 갑자기 지구멸망하면 어떡하지...?)',
  subtitle: '일상에서 상상하는 시간을 빼보라구요?',
  type: '그럼 하루가 없어지는 개발자',
  part: Part.AM,
  content: [
    '이런 저런 상상이 너무 즐겁고 재밌어요.',
    '상상하다가 밤 잠을 설치기도 해요.',
    '그래도 때로는 상상에서 솔루션을 찾아내기도 해요.',
    '깊게 생각할 수 있는 여지를 주는 것들이 좋아요.',
    '한 번 읽고나면, 혼자 곱씹어보다가 완벽하게 이해해버려요.',
    '이미 수백번 상상해봤기에 설명도 기가막히게 잘해요!',
  ],
};

export const results: Array<DevType> = [
  vitaminDev,
  artistDev,
  plannerDev,
  foxDev,
  fighterDev,
  imagineDev,
];

export const questions: Array<Questions> = [
  {
    question:
      '바늘 구멍같은 취업시장에서 나는 승리했다...\n오늘은 첫 출근! 나는 귀요미 신입 개발자!\n드디어 회사 입구에 도착했다.',
    select: [
      {
        type: [vitaminDev, imagineDev, artistDev],
        answer: '두근두근, 어떤 사람들이 았을까? 너무 기대돼!',
      },
      {
        type: [foxDev, vitaminDev, artistDev],
        answer: '내가 얼마나 뛰어난 개발자인지 알려줘야겠군.',
      },
      {
        type: [imagineDev, plannerDev, fighterDev],
        answer: '일단 들어가서 인사를...\n아 괜히 말실수하는거 아냐? 개떨려...',
      },
      {
        type: [foxDev, plannerDev, fighterDev],
        answer: '1년만 경력 쌓고 나가야지.\n나는 더 높은 곳에 있어야해.',
      },
    ],
  },
  {
    question:
      '신입끼리 모여서 진행하는 온보딩 교육.\n내 옆에 있는 이 사람이 나의 동기인가보다.\n들떠있는건지 나한테 이것저것 물어보네?',
    select: [
      {
        type: [vitaminDev, plannerDev, fighterDev],
        answer:
          '반가워요! 서로 도와주면서 잘 지내봐요!\n(좋은 사람인 것 같다!)',
      },
      {
        type: [artistDev, plannerDev, foxDev],
        answer: '반가워요! 서로 도와주면서 잘 지내봐요^^\n(말좀 그만 걸어)',
      },
      {
        type: [artistDev, foxDev, imagineDev],
        answer: '아~ 동작구 사시는구나. 아~ 숭실대 나오셨구나. 아~',
      },
      {
        type: [vitaminDev, fighterDev, imagineDev],
        answer: '아진짜요?\n갑자기생각난건데제가LA에있을때말이죠...',
      },
    ],
  },
  {
    question:
      '헉 앞으로 일하게 될 팀을 배정해준다고 한다.\n내가 들어갈 팀은 이랬으면 좋겠는데?!',
    select: [
      {
        type: [vitaminDev, fighterDev, imagineDev],
        answer: '성과가 뭐가 중요해. 난 무조건 사람 냄새 나는 팀!',
      },
      {
        type: [artistDev, plannerDev, foxDev],
        answer: '회사에서 무슨 인간관계야.. 성과 좋고 철저한 팀.',
      },
      {
        type: [plannerDev, foxDev, fighterDev],
        answer: '난 내가 주인공이면 돼. 내가 활약할 수 있는 팀.',
      },
      {
        type: [vitaminDev, artistDev, imagineDev],
        answer: '인생은 끝 없는 공부! 배울 점이 많은 사람들이 있는 팀!',
      },
    ],
  },
  {
    question:
      '긴장해서 그런가?\n배고파서 죽을 것만 같다.\n2시가 다 되어가는데 왜 아무도 밥을 안먹지...?',
    select: [
      {
        type: [vitaminDev, imagineDev, plannerDev],
        answer: '(끙... 오늘은 물만 마셔야겠다.)',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '저 혹시, 저희 식사는 알아서 하고 오면 됩니까?',
      },
      {
        type: [vitaminDev, plannerDev, foxDev],
        answer: '(화장실 가서 초코바 먹고와야겠다. 념념굿)',
      },
      {
        type: [artistDev, fighterDev, imagineDev],
        answer: '(회사 리뷰 사이트 뒤져보는 중...)',
      },
    ],
  },
  {
    question:
      '빡세다곤 들었지만...\n첫 날부터 과제라니!\n어...? 과제의 상태가...',
    select: [
      {
        type: [foxDev, fighterDev, imagineDev],
        answer: '가이드라인 빡세네... 난 자유로운게 좋은데.',
      },
      {
        type: [artistDev, plannerDev, imagineDev],
        answer: '자유롭게 해결해보라고...? 장난치는 것도 아니고...',
      },
      {
        type: [vitaminDev, artistDev, foxDev],
        answer: '쉽네ㅋㅋ',
      },
      {
        type: [vitaminDev, plannerDev, fighterDev],
        answer: '동기랑 같이 이야기하면서 해결해봐야지!\n카톡을 해봐야겠다.',
      },
    ],
  },
  {
    question:
      '오후 업무를 받았다.\n엥? 나 개발자로 들어온거 아니었나...?\n난생 처음보는 업무를 받았다.',
    select: [
      {
        type: [vitaminDev, artistDev, plannerDev],
        answer: '그래도 일단 받았으니, 할 수 있을 만큼은 해야지.',
      },
      {
        type: [vitaminDev, plannerDev, imagineDev],
        answer: '선배님, 제 업무가 맞는지 확인 부탁드려도 될까요?\n(제발...)',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '선배님, 제 업무가 맞는지 확인 부탁드려도 될까요?\n(장난하냐?)',
      },
      {
        type: [foxDev, fighterDev, imagineDev],
        answer: '내 업무 아니니까 대충해서 내야지.',
      },
    ],
  },
  {
    question:
      '주변 사람들에게 물어보니, 일단 외우라고 한다.\n관련 자료도 받긴 받았는데...',
    select: [
      {
        type: [vitaminDev, fighterDev, imagineDev],
        answer: '자료까지 받으니까 힘이 나네. 열심히 외워보자!',
      },
      {
        type: [artistDev, plannerDev, fighterDev],
        answer: '이걸 왜 나한테...? 진지하게 도망갈까...',
      },
      {
        type: [vitaminDev, artistDev, foxDev],
        answer: '하라면 못할 줄 알고? 이딴 잡무 1시간 안에 끝내간다.',
      },
      {
        type: [plannerDev, foxDev, imagineDev],
        answer: '블라인드를 켠다...',
      },
    ],
  },
  {
    question:
      '벌써 팀 프로젝트에 들어간다고?\n뭐하는 회사지... 쨌든 입사 후 첫 팀플!',
    select: [
      {
        type: [vitaminDev, foxDev, fighterDev],
        answer: '너무 설렌다... 이번에 얼마나 성장할까?',
      },
      {
        type: [artistDev, plannerDev, imagineDev],
        answer: '아니 적응하고 공부할 시간은 달라고',
      },
      {
        type: [vitaminDev, artistDev, foxDev],
        answer: '드디어 내 능력을 보여줄 시간이다.',
      },
      {
        type: [plannerDev, fighterDev, imagineDev],
        answer: '(오만가지 상상 중)\n팀플하다 싸우진 않겠지...',
      },
    ],
  },
  {
    question: '용기내서 낸 나의 의견!\n그리고 이어지는 팀원들의 지적...',
    select: [
      {
        type: [vitaminDev, plannerDev, imagineDev],
        answer: '후잉... 죄송합니다...',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '오호 그 점을 역이용해서 보완해보는건 어떨까요?',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '아 네~ (뭐래 내 말이 맞구만;)',
      },
      {
        type: [vitaminDev, plannerDev, imagineDev],
        answer: '그쵸! 별로죠?! 저도 별로라고 생각했어요!(ㅠㅠ)',
      },
    ],
  },
  {
    question: '오 아침에 봤던 동기다!\n잠깐... 동기가 선배에게 혼나고 있는데?',
    select: [
      {
        type: [vitaminDev, artistDev, imagineDev],
        answer: '괜찮아... 원래 그런게 사회생활이래. 힘내자!',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '그럼 이따 가서 그걸 이렇게 한 번 해봐.',
      },
      {
        type: [plannerDev, foxDev, imagineDev],
        answer: '이따 술이나 한잔 할래?',
      },
      {
        type: [vitaminDev, plannerDev, fighterDev],
        answer: '엥 너네 선배 진짜 이상하네 말을 왜 그따구로 해?',
      },
    ],
  },
  {
    question: '어우 첫 날이라 그런가?\n시간이 너무 빨라! 슬슬 퇴근 시간이네...',
    select: [
      {
        type: [vitaminDev, plannerDev, imagineDev],
        answer: '오늘의 나,, 너무 고생 많았다⭐',
      },
      {
        type: [artistDev, plannerDev, fighterDev],
        answer: '내일은 아침에 과제를 절반하고, 잡무 해결한 다음...',
      },
      {
        type: [vitaminDev, foxDev, imagineDev],
        answer: '놀다갈까?',
      },
      {
        type: [artistDev, foxDev, fighterDev],
        answer: '근데 생각해보니까 갑자기 빡치네 아까...',
      },
    ],
  },
  {
    question: '앗 아니나 다를까..\n첫 날이니 회식을 하자고 한다.',
    select: [
      {
        type: [vitaminDev, artistDev, fighterDev],
        answer: '오옹!!! 기대하던 회식!!! 너무 좋아!!!',
      },
      {
        type: [artistDev, plannerDev, imagineDev],
        answer: '아... 네! 좋아요 ~... ㅎㅎ...',
      },
      {
        type: [vitaminDev, foxDev, fighterDev],
        answer: '아니? 내가 먼저 회식 하자고 말한다.',
      },
      {
        type: [plannerDev, foxDev, imagineDev],
        answer: '앗 정말 죄송합니다 지금 급한 일이 있어서 (없지롱ㅋㅋ)',
      },
    ],
  },
];
