import React from 'react';
import * as styles from './roadmapArea.css';

type LoadmapMenuProps = {
  temp: string;
};

const LoadmapMenu = ({ temp }: LoadmapMenuProps) => {
  return (
    <section className={styles.roadmap_Menu}>
      <div className={styles.container}></div>
    </section>
  );
};

export default LoadmapMenu;
