import { DevType } from '@/resources/devTestQustions';
import type { StepProps } from './types';
import * as styles from './devtest.css';
import ResultBox from './ResultBox/ResultBox';
import { Button } from '../common';

interface Props extends StepProps {
  result?: DevType;
}

const ResultPage = ({ result }: Props) => {
  return (
    <div className={styles.resultPage['container']}>
      <div className={styles.resultTitle['box']}>
        <span className={styles.resultTitle['subtitle']}>
          당신의 개발자 유형은,
        </span>
        <span
          className={styles.resultTitle['title']}
        >{`${result?.type}!`}</span>
      </div>
      <ResultBox result={result!} />
      <div className={styles.resultPage['btnBox']}>
        <Button selected={3} title={'결과 저장하기'} />
        <Button
          selected={3}
          title={'다시 테스트하기'}
          onClick={() => location.reload()}
        />
      </div>
    </div>
  );
};

export default ResultPage;
