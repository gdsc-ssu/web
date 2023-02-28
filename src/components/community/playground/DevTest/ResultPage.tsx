import { DevType } from '@/resources/devTestQustions';
import type { StepProps } from './types';
import * as styles from './devtest.css';
import ResultBox from './ResultBox/ResultBox';
import { Button } from '../common';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef } from 'react';

interface Props extends StepProps {
  result?: DevType;
}

const ResultPage = ({ result }: Props) => {
  const cardRef = useRef(null);

  const onDownloadBtn = () => {
    const card = cardRef.current;
    if (card) {
      domtoimage.toBlob(card).then((blob) => {
        saveAs(blob, 'card.png');
      });
    }
  };

  return (
    <div className={styles.resultPage['container']} id="devtest--result">
      <div className={styles.resultPage['resultWrapper']} ref={cardRef}>
        <div className={styles.resultTitle['box']}>
          <span className={styles.resultTitle['subtitle']}>
            당신의 개발자 유형은,
          </span>
          <span
            className={styles.resultTitle['title']}
          >{`${result?.type}!`}</span>
        </div>
        <ResultBox result={result!} />
      </div>
      <div className={styles.resultPage['btnBox']}>
        <div className={styles.resultPage['recruiting']}>
          <span className={styles.resultPage['recDetail']}>
            나와 비슷한 개발자들이 모여있는
          </span>
          <Button selected={4} title={`GDSC ${result?.part} 지원하기`} />
        </div>
        <Button
          selected={3}
          title={'결과 저장하기'}
          onClick={() => onDownloadBtn()}
        />
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
