import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

function Third() {
  const onclicking = () => {
    console.log('click button');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.Btext}>감사합니다!</div>
        <div className={styles.text}>
          작성해주신 내용이 잘 전달되었습니다. <br />
          최대한 빠른 시일 내에 확인하고, 반영할 수 있도록 노력하겠습니다.
        </div>
      </div>
      <Button text="건의사항 작성하기" onClickHandler={() => onclicking()} />
    </>
  );
}

export default Third;
