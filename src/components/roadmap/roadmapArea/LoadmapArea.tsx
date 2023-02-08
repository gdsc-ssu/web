import React, { Children } from 'react';
import * as styles from './roadmapArea.css';
import LoadmapAreaLeft from '../roadmapAreaLeft/LoadmapAreaLeft';
import RoadmapAreaRight from '../roadmapAreaRight/LoadmapAreaRight';

type LoadmapAreaProps = {
  val: string;
};

const LoadmapArea = () => {
  return (
    <>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Beginner"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <RoadmapAreaRight />
      </section>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Intermediated"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <RoadmapAreaRight />
      </section>
      <section className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Advanced"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <RoadmapAreaRight />
      </section>
    </>
  );
};

export default LoadmapArea;
