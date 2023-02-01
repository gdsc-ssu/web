import React from 'react';

type LoadmapAreaProps = {
  title: string;
  subTitle: string;
};

const RoadmapArea = ({ title, subTitle }: LoadmapAreaProps) => {
  return (
    <section className="roadmap_area">
      <div className="container">
        <h3 className="roadmap_title">{title}</h3>
        <h5 className="roadmap_subTitle">{subTitle}</h5>
      </div>
    </section>
  );
};

export default RoadmapArea;
