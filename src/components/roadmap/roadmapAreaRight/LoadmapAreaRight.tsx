import React, { useState } from 'react';
import * as styles from './roadmapAreaRight.css';
import { roadmap_data } from '../../../resources/roadmap-data';

interface Idata {
  title: string;
  content: string;
  menu: string;
}

const LoadmapAreaRight = () => {
  const [menu, setMenu] = useState('Web Frontend');
  const menu_items = roadmap_data.filter((item) => item.menu === menu);
  const [level, setLevels] = useState('begin');
  const level_items = menu_items.filter((item) => item.level === level);

  console.log(level_items);

  return (
    <section className={styles.roadmapAreaRight}>
      <div className={styles.container}>
        {level_items.map((x) => (
          <div key={x.id} className={styles.container}>
            <div className={styles.title}>{x.title}</div>
            <div className={styles.content}>{x.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadmapAreaRight;
