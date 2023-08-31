import ActivitySection from '@/components/main/ActivitySection';
import BrandSection from '@/components/main/BrandSection';
import HeroSection from '@/components/main/HeroSection';
import PictureSection from '@/components/main/PictureSection';
import RecruitSection from '@/components/main/RecruitSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC Soongsil University</title>
        <meta
          name="description"
          content="GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다."
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdscsoongsil.pages.dev" />
        <meta property="og:title" content="GDSC Soongsil University" />
        <meta
          property="og:description"
          content="GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다."
        />
        <meta
          property="og:image"
          content="https://gdscsoongsil.pages.dev/opengraph.png"
        />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="GDSC Soongsil University" />
        <meta
          name="twitter:description"
          content="GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다."
        />
        <meta
          name="twitter:image"
          content="https://gdscsoongsil.pages.dev/opengraph.png"
        />
      </Head>
      <HeroSection />
      <BrandSection />
      <ActivitySection />
      <PictureSection />
      <RecruitSection />
    </>
  );
}
