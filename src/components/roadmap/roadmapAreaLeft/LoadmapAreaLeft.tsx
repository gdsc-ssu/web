import React from 'react';
import * as styles from './roadmapAreaLeft.css';

type LoadmapAreaLeftProps = {
  temp: string;
};

const LoadmapAreaLeft = ({ temp }: LoadmapAreaLeftProps) => {
  return (
    <section className={styles.roadmapAreaLeft}>
      <div className={styles.container}>{temp}</div>
    </section>
  );
};

export default LoadmapAreaLeft;
