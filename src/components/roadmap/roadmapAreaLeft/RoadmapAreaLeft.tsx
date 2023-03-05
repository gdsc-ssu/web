import React from 'react';
import * as styles from '../roadmapAreaLeft/roadmapAreaLeft.css';

type LoadmapAreaLeftProps = {
  title: string;
  subtitle: string;
};

const LoadmapAreaLeft = ({ title, subtitle }: LoadmapAreaLeftProps) => {
  return (
    <section className={styles.roadmapAreaLeft['box']}>
      <div className={styles.roadmapAreaLeft['container']}>
        <div className={styles.roadmapAreaLeft['title']}>{title}</div>
        <div className={styles.roadmapAreaLeft['subtitle']}>{subtitle}</div>
      </div>
    </section>
  );
};

export default LoadmapAreaLeft;
