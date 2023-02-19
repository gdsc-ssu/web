import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import First from './first';
import Second from './second';
import Third from './third';
import Button from '../../../common/Button/Button';

function Content() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const onSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  const onFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  const onThird = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  return (
    <>
      {first && <First />}
      {first && (
        <Button text="건의사항 작성하기" onClickHandler={() => onSecond()} />
      )}
      {second && <Second />}
      {second && (
        <Button text="작성 취소하기" onClickHandler={() => onFirst()} />
      )}
      {second && (
        <Button text="건의사항 전송하기" onClickHandler={() => onThird()} />
      )}
      {third && <Third />}
    </>
  );
}

export default Content;
