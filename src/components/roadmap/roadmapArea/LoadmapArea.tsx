import React, { Children } from 'react';
import * as styles from './roadmapArea.css';
import LoadmapAreaLeft from '../roadmapAreaLeft/LoadmapAreaLeft';
import RoadmapAreaRight from '../roadmapAreaRight/LoadmapAreaRight';

// type LoadmapAreaProps = {
//   temp: string;
// };

const LoadmapArea = () => {
  return (
    <>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft temp="LoadmapAreaLeft" />
        <RoadmapAreaRight temp="LoadmapAreaRight" />
      </section>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft temp="LoadmapAreaLeft" />
        <RoadmapAreaRight temp="LoadmapAreaRight" />
      </section>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft temp="LoadmapAreaLeft" />
        <RoadmapAreaRight temp="LoadmapAreaRight" />
      </section>
    </>
  );
};

export default LoadmapArea;
