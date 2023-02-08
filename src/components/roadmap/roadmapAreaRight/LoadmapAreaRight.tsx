import React from 'react';
import * as styles from './roadmapAreaRight.css';

type LoadmapAreaRightProps = {
  temp: string;
};

const LoadmapAreaRight = ({ temp }: LoadmapAreaRightProps) => {
  return (
    <section className={styles.roadmapAreaRight}>
      <div className={styles.container}>{temp}</div>
    </section>
  );
};

export default LoadmapAreaRight;
