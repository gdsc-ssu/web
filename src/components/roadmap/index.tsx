import React from 'react';
import './app.css';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import RoadmapContent from './RoadmapContent/RoadmapContent';

const Roadmap = () => {
  return (
    <>
      <Breadcrumb
        title={'파트별 로드맵'}
        subTitle={'GDSC SSU에서 제안하는 파트별 최신 로드맵'}
      />
      <RoadmapContent />
    </>
  );
};

export default Roadmap;
