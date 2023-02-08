import React from 'react';
import './app.css';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import LoadmapArea from '../roadmap/roadmapArea/LoadmapArea';
import LoadmapAreaLeft from '../roadmap/roadmapAreaLeft/LoadmapAreaLeft';
import LoadmapAreaRight from '../roadmap/roadmapAreaRight/LoadmapAreaRight';
import LoadmapMenu from '../roadmap/roadmapMenu/LoadmapMenu';

const Roadmap = () => {
  return (
    <>
      <Breadcrumb
        title={'파트별 로드맵'}
        subTitle={'GDSC SSU에서 제안하는 파트별 최신 로드맵'}
      />
      <LoadmapMenu />
      <LoadmapArea />
    </>
  );
};

export default Roadmap;
