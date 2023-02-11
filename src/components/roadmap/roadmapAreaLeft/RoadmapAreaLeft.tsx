import React from 'react';
import * as styles from './roadmapAreaLeft.css';

type LoadmapAreaLeftProps = {
  title: string;
  subtitle: string;
};

const LoadmapAreaLeft = ({ title, subtitle }: LoadmapAreaLeftProps) => {
  return (
    <section className={styles.roadmapAreaLeft}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </section>
  );
};

export default LoadmapAreaLeft;
