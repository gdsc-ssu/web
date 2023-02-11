import React, { useState } from 'react';
import * as styles from './roadmapContent.css';
import { roadmap_data } from '../../../resources/roadmap-data';
import Button from '../../common/Button/Button';
import LoadmapAreaLeft from '../roadmapAreaLeft/LoadmapAreaLeft';

const RoadmapContent = () => {
  const [category, setCategory] = useState('Web Frontend');
  const items = roadmap_data.filter((p) => p.stat);
  const [portfolioItems, setPortfolioItems] = useState(
    items.filter((i) => i.category === category),
  );

  // set으로 카테고리를 뽑아내려 했으나 타입 관련 에러로.. 배열을 일단 하나 생성했습니다..
  const categories = [
    'Web Frontend',
    'Git',
    'Cross Platform',
    'Server/Cloud',
    'AI/ML',
    'DevOps',
  ];

  const handleCategory = (c: string) => {
    setCategory(c);
    const new_items = items.filter((i) => i.category === c);
    setPortfolioItems(new_items);
  };

  const FirstItems = portfolioItems.filter((i) => i.level === 'beginner');
  const SecondItems = portfolioItems.filter((i) => i.level === 'intermediated');
  const ThirdItems = portfolioItems.filter((i) => i.level === 'advanced');

  return (
    <>
      <div className={styles.roadmap_Menu}>
        <div className={styles.MenuContainer}>
          {categories.map((c, i) => (
            <Button text={c} onClickHandler={() => handleCategory(c)} key={i} />
          ))}
        </div>
        <div className={styles.title}>2023 {category} RoadMap </div>
      </div>
      <div className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Beginner"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <div className={styles.roadmapAreaRight}>
          <div className={styles.container}>
            {FirstItems.map((x) => (
              <div key={x.id} className={styles.container}>
                <div className={styles.title}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Intermediated"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <div className={styles.roadmapAreaRight}>
          <div className={styles.container}>
            {SecondItems.map((x) => (
              <div key={x.id} className={styles.container}>
                <div className={styles.title}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Advanced"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <div className={styles.roadmapAreaRight}>
          <div className={styles.container}>
            {ThirdItems.map((x) => (
              <div key={x.id} className={styles.container}>
                <div className={styles.title}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapContent;
