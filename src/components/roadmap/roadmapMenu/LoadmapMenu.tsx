import React from 'react';
import * as styles from './roadmapMenu.css';
import Button from '../../common/Button/Button';

type LoadmapMenuProps = {
  temp: string;
};

const LoadmapMenu = ({ temp }: LoadmapMenuProps) => {
  return (
    <section className={styles.roadmap_Menu}>
      <div className={styles.container}>
        <Button text={'web FrontEnd'}></Button>
        <Button text={'Git'}></Button>
        <Button text={'Cross Platform'}></Button>
        <Button text={'Server/Cloud'}></Button>
        <Button text={'AI/ML'}></Button>
        <Button text={'DEvOps'}></Button>
      </div>
      <div>2023 {temp} RoadMap</div>
    </section>
  );
};

export default LoadmapMenu;
