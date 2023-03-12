import React, { useState } from 'react';
import * as styles from '../roadmapContent/roadmapContent.css';
import { roadmap_data } from '../../../resources/roadmap-data';
import Button from '../Button/Button';
import LoadmapAreaLeft from '../roadmapAreaLeft/RoadmapAreaLeft';

const RoadmapContent = () => {
  // set으로 카테고리를 뽑아내려 했으나 타입 관련 에러로.. 배열을 일단 하나 생성했습니다..
  const categories = [
    'Web Frontend',
    'Git',
    'Cross Platform',
    'Server/Cloud',
    'AI/ML',
    'DevOps',
  ];

  const [category, setCategory] = useState('Web Frontend');
  const items = roadmap_data.filter((p) => p.stat);
  // const [btnActive, setBtnActive] = useState(false);
  const [isSelected, setIsSelected] = useState<Array<boolean>>(
    Array(categories.length).fill(false),
  );
  const [prev, setPrev] = useState<Array<string | number>>(['Web Frontend', 0]);
  const [categoryItems, setCategoryItems] = useState(
    items.filter((i) => i.category === category),
  );

  const handleCategory = (c: string, idx: number) => {
    if (c !== prev[0]) {
      console.log('prev', prev[0]);
      console.log('curr', c);
      isSelected.fill(false);
    }

    setCategory(c);
    const new_items = items.filter((i) => i.category === c);
    setCategoryItems(new_items);

    isSelected[idx] = true;
    setIsSelected([
      ...isSelected.slice(0, idx),
      isSelected[idx],
      ...isSelected.slice(idx + 1),
    ]);

    setPrev([c, idx]);
  };

  const FirstItems = categoryItems.filter((i) => i.level === 'beginner');
  const SecondItems = categoryItems.filter((i) => i.level === 'intermediated');
  const ThirdItems = categoryItems.filter((i) => i.level === 'advanced');

  return (
    <>
      {/* 버튼 메뉴 */}
      <div className={styles.category['box']}>
        <div className={styles.category['container']}>
          {categories.map((c, i) => (
            <Button
              title={c}
              selected={i}
              onClick={() => handleCategory(c, i)}
              key={i}
              clicked={isSelected[i]}
            />
          ))}
        </div>
        <div className={styles.category['container']}>
          2023 {category} RoadMap{' '}
        </div>
      </div>

      {/* content */}
      <div className={styles.roadmapArea}>
        <LoadmapAreaLeft
          title="Beginner"
          subtitle="개발을 안해봤다구요? 시작하지마세요.."
        />
        <div className={styles.roadmapAreaRight['box']}>
          <div className={styles.roadmapAreaRight['container']}>
            {FirstItems.map((x) => (
              <div key={x.id} className={styles.roadmapAreaRight['container']}>
                <div className={styles.roadmapAreaRight['title']}>
                  {x.title}
                </div>
                <div className={styles.roadmapAreaRight['subtitle']}>
                  {x.content}
                </div>
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
        <div className={styles.roadmapAreaRight['box']}>
          <div className={styles.roadmapAreaRight['container']}>
            {SecondItems.map((x) => (
              <div key={x.id} className={styles.roadmapAreaRight['container']}>
                <div className={styles.roadmapAreaRight['title']}>
                  {x.title}
                </div>
                <div className={styles.roadmapAreaRight['subtitle']}>
                  {x.content}
                </div>
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
        <div className={styles.roadmapAreaRight['box']}>
          <div className={styles.roadmapAreaRight['container']}>
            {ThirdItems.map((x) => (
              <div key={x.id} className={styles.roadmapAreaRight['container']}>
                <div className={styles.roadmapAreaRight['title']}>
                  {x.title}
                </div>
                <div className={styles.roadmapAreaRight['subtitle']}>
                  {x.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapContent;
