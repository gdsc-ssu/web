import { questions } from '@/resources/devTestQustions';
import { useState } from 'react';
import { Button, TitleBox } from '../common';
import { COLORS } from '../common/token';
import type { StepProps } from './types';

interface Props extends StepProps {}

const PlayPage = (props: Props) => {
  const { onEnd } = props;
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Array<number>>(
    Array(questions.length).fill(0),
  );

  return (
    <div className="devtest__play-page">
      <div className="devtest__play-page--question">
        <TitleBox title={`Q${idx + 1}`} subtitle={questions[idx].question} />
      </div>
      <div className="devtest__play-page--select">
        {questions[idx].select.map((s, aIdx) => (
          <Button
            backgroundColor={
              answers[idx] === aIdx
                ? COLORS.grayscale.Black
                : COLORS.grayscale.white
            }
            color={
              answers[idx] === aIdx
                ? COLORS.grayscale.white
                : COLORS.grayscale.Black
            }
            title={s}
            onClick={() =>
              setAnswers((prev) => prev.map((p, pi) => (idx === pi ? aIdx : p)))
            }
            key={s}
          />
        ))}
      </div>
      <Button
        backgroundColor="white"
        color={COLORS.SSU.DeepBlue}
        title="다음 질문으로!"
        onClick={
          () =>
            idx !== questions.length - 1 //마지막 질문이 아니라면
              ? setIdx((prev) => prev + 1) //다음 질문으로
              : onEnd() //마지막 질문이라면 -> 다음 스테이지로
        }
      />
      <style jsx>{`
        .devtest__play-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
        }
        .devtest__play-page--question,
        .devtest__play-page--select {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
      `}</style>
    </div>
  );
};

export default PlayPage;
