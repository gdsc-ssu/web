import { DevType, images } from '@/resources/devTestQustions';
import * as styles from './ResultBox.css';
import Image from 'next/image';
import { Button } from '../../common';
import Logo from '@/resources/assets/logo.svg';

interface Props {
  result: DevType;
}

const ResultBox = ({ result }: Props) => {
  return (
    <div className={styles.resultBox['box']}>
      <div className={styles.resultBox['titleBox']}>
        <span className={styles.resultBox['title']}>{result.title}</span>
        <span className={styles.resultBox['subtitle']}>{result.subtitle}</span>
      </div>
      <span className={styles.resultBox['img']}>
        <Image src={images[result.name]} alt={result.type} fill />
      </span>
      <ul className={styles.resultBox['list']}>
        {result.content.map((r) => (
          <li className={r}>{r}</li>
        ))}
      </ul>
      <div className={styles.resultBox['logo']}>
        <Image src={Logo} width={50} height={34.25} alt="logo" />
        <span className={styles.resultBox['recDetail']}>
          GDSC Soongsil Univ.
        </span>
      </div>

      {/* <span className={styles.resultBox['recDetail']}>
        나와 비슷한 개발자들이 모여있는...
      </span>
      <Button selected={4} title={`GDSC ${result?.part} 지원하기`} /> */}
    </div>
  );
};

export default ResultBox;
