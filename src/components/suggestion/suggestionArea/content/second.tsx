import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

function Second() {
  const [inputValue, setInputValue] = useState('');

  const [newTodo, setNewTodo] = useState('');

  const inputChg = (e: any) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // setTodo([...todo, newTodo]);
    setInputValue('');
  };

  // useEffect(() => {
  //   setNewTodo(inputValue);
  // }, [inputValue]);

  useEffect(() => {
    localStorage.setItem('todoKey', JSON.stringify(inputValue));
  }, [inputValue]);

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder="여기에 내용을 입력해주세요"
            value={inputValue}
            onChange={inputChg}
          ></input>
          <Button text="작성 취소하기" onClickHandler={() => onSubmit} />
          <Button text="건의사항 전송하기" onClickHandler={() => onSubmit} />
        </form>
      </div>
    </>
  );
}

export default Second;