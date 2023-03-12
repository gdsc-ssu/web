import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import First from './first';
import Second from './second';
import Third from './third';
import Button from '../../Button/Button';

interface Props {
  con: boolean;
}

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
        <Button content="건의사항 작성하기" onClick={() => onSecond()} />
      )}
      {second && <Second />}
      {second && <Button content="작성 취소하기" onClick={() => onFirst()} />}
      {second && (
        <Button content="건의사항 전송하기" onClick={() => onThird()} />
      )}
      {third && <Third />}
      {third && (
        <Button content="건의사항 작성하기" onClick={() => onFirst()} />
      )}
    </>
  );
}

export default Content;
