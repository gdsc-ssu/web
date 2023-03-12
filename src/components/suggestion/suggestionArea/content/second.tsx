import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

// interface Props {
//   con: boolean;
// }
function Second() {
  let [inputValue, setInputValue] = useState('');
  let [con, setCon] = useState(true);

  const inputChg = (e: any) => {
    setInputValue(e.target.value);
    if (inputValue.length > 29) {
      setCon(false);
    } else if (inputValue.length < 30) {
      setCon(true);
    }
  };

  return (
    <>
      <div className={styles.suggestion['container']}>
        {/* <form onSubmit={onSubmit}> */}
        <form>
          <input
            className={styles.suggestion['inputStyle']}
            type="text"
            placeholder="여기에 내용을 입력해주세요"
            // value={inputValue}
            onChange={inputChg}
          ></input>
          {con && (
            <div className={styles.suggestion['subtext']}>
              {' '}
              *30글자 이상 작성해주세요.
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Second;
