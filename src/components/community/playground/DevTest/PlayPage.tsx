import { questions } from '@/resources/devTestQustions';
import { useState, useEffect } from 'react';
import { Button, TitleBox } from '../common';
import type { StepProps } from './types';
import * as styles from './devtest.css';
import ProgressBar from './ProgressBar/ProgressBar';
import { DevType, results } from '@/resources/devTestQustions';

interface Props extends StepProps {
  saveResult?: (res: DevType) => void;
}

type Count = {
  [key: number]: number;
};

const PlayPage = (props: Props) => {
  const { onEnd, saveResult } = props;
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Array<number>>(
    Array(questions.length).fill(0),
  );
  const [choices, setChoices] = useState<Array<DevType>>(
    questions[0].select[0].type,
  );
  const [types, setTypes] = useState<Array<DevType>>([]);

  const choice = (aIdx: number, devType: Array<DevType>) => {
    setChoices(devType);
    setAnswers((prev) => prev.map((p, pi) => (idx === pi ? aIdx : p)));
  };

  const moveToNext = () => {
    setTypes((prev) => [...prev, ...choices]);
    setIdx((prev) => prev + 1);
  };

  const getMode = () => {
    const devTypes = types.map((type) => type.name);

    const counts: Count = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    const newObject = devTypes.reduce((acc, cur) => {
      acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    }, counts);

    const modeKey: number = Object.keys(newObject)
      .map((a) => Number(a))
      .reduce((acc, cur) => (newObject[acc] > newObject[cur] ? acc : cur));

    saveResult!(results[modeKey]);
  };

  useEffect(() => {
    if (idx == questions.length) {
      getMode();
      onEnd();
    } else {
      setChoices(questions[idx].select[0].type);
    }
  }, [idx]);

  return (
    <div className={styles.playPage}>
      {questions[idx] ? (
        <>
          <span className={styles.progress}>
            <ProgressBar curIdx={idx} />
          </span>
          <div className={styles.questionArea}>
            <TitleBox
              title={`Q${idx + 1}`}
              subtitle={questions[idx].question}
            />
          </div>
          <div className={styles.questionArea}>
            {questions[idx].select.map((s, aIdx) => (
              <Button
                selected={answers[idx] === aIdx ? 0 : 1}
                title={s.answer}
                onClick={() => choice(aIdx, s.type)}
                key={s.answer}
              />
            ))}
          </div>
          <Button
            selected={2}
            title={
              idx !== questions.length - 1 ? '다음 질문으로!' : '결과 확인하기!'
            }
            onClick={moveToNext}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PlayPage;
