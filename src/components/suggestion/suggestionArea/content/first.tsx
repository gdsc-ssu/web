import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

function First() {
  const onclicking = () => {
    console.log('click button');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          GDSC SSU 건의함입니다.
          <br /> 여러분의 소중한 의견은 GDSC의 발전에 큰 도움이 돼요!
          <br /> 작성한 내용은 GDSC Lead에게 전달됩니다.
        </div>
      </div>
      <Button text="건의사항 작성하기" onClickHandler={() => onclicking()} />
    </>
  );
}

export default First;
