import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import LoadmapArea from '../roadmap/roadmap-area';
import Nav from '../common/Nav/Nav';
import LoadmapMenu from '../roadmap/LoadmapMenu';

const Roadmap = () => {
  return (
    <>
      <Nav temp={'[Nav]'} />
      <Breadcrumb
        title={'[Breadcrumb] 파트별 로드맵'}
        subTitle={'GDSC SSU에서 제안하는 파트별 최신 로드맵'}
      />
      <LoadmapMenu temp={'[Menu]로드맵 파트별 메뉴가 들어갈 자리입니다'} />
      <h3>[isSelectedMenu]2023 Web Frontend RoadMap</h3>
      <LoadmapArea
        title={'Beginner'}
        subTitle={'개발 안해봤다구요? 시작하지마세요..'}
      />
      <LoadmapArea
        title={'Intermediated'}
        subTitle={'개발 안해봤다구요? 시작하지마세요..'}
      />
      <LoadmapArea
        title={'Advanced'}
        subTitle={'개발 안해봤다구요? 시작하지마세요..'}
      />
    </>
  );
};

export default Roadmap;
