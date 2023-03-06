import React, { useState, useEffect } from 'react';
import * as styles from './content.css';

function First() {
  return (
    <>
      <div className={styles.suggestion['container']}>
        <div className={styles.suggestion['text']}>
          GDSC SSU 건의함입니다.
          <br /> 여러분의 소중한 의견은 GDSC의 발전에 큰 도움이 돼요!
          <br /> 작성한 내용은 GDSC Lead에게 전달됩니다.
        </div>
      </div>
    </>
  );
}

export default First;
