import React from 'react';
import * as styles from './roadmapMenu.css';
import Button from '../../common/Button/Button';
import { useState } from 'react';

const LoadmapMenu = () => {
  const [text, setText] = useState('web FrontEnd');

  const onClick = (text: string) => {
    setText(text);
  };

  return (
    <section className={styles.roadmap_Menu}>
      <div className={styles.container}>
        <Button text={'web FrontEnd'} onClicking={onClick}></Button>
        <Button text={'Git'} onClicking={onClick}></Button>
        <Button text={'Cross Platform'} onClicking={onClick}></Button>
        <Button text={'Server/Cloud'} onClicking={onClick}></Button>
        <Button text={'AI/ML'} onClicking={onClick}></Button>
        <Button text={'DevOps'} onClicking={onClick}></Button>
      </div>
      <div>2023 {text} RoadMap </div>
    </section>
  );
};

export default LoadmapMenu;
