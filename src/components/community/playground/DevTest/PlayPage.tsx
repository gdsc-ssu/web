import { questions } from '@/resources/devTestQustions';
import { useState } from 'react';
import { Button, TitleBox } from '../common';
import type { StepProps } from './types';
import * as styles from './devtest.css';

interface Props extends StepProps {}

const PlayPage = (props: Props) => {
  const { onEnd } = props;
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Array<number>>(
    Array(questions.length).fill(0),
  );

  return (
    <div className={styles.playPage}>
      <div className={styles.questionArea}>
        <TitleBox title={`Q${idx + 1}`} subtitle={questions[idx].question} />
      </div>
      <div className={styles.questionArea}>
        {questions[idx].select.map((s, aIdx) => (
          <Button
            selected={answers[idx] === aIdx ? 0 : 1}
            title={s}
            onClick={() =>
              setAnswers((prev) => prev.map((p, pi) => (idx === pi ? aIdx : p)))
            }
            key={s}
          />
        ))}
      </div>
      <Button
        selected={2}
        title="다음 질문으로!"
        onClick={
          () =>
            idx !== questions.length - 1 //마지막 질문이 아니라면
              ? setIdx((prev) => prev + 1) //다음 질문으로
              : onEnd() //마지막 질문이라면 -> 다음 스테이지로
        }
      />
    </div>
  );
};

export default PlayPage;
