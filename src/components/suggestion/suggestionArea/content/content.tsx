import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

const contents = {
  first: `GDSC SSU 건의함입니다.\n 여러분의 소중한 의견은 GDSC의 발전에 큰 도움이 돼요! \n 작성한 내용은 GDSC Lead에게 전달됩니다.`,
  second: '여기에 내용을 입력해주세요',
  third:
    '작성해주신 내용이 잘 전달되었습니다. 최대한 빠른 시일 내에 확인하고, 반영할 수 있도록 노력하겠습니다.',
};
const pages = ['first', 'second', 'third'];
// const [page, setPage] = useState(pages);

function First() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{contents.first}</div>
    </div>
  );
}
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
            type="text"
            placeholder={contents.second}
            value={inputValue}
            onChange={inputChg}
          ></input>
          <Button text="건의사항 전송하기" onClickHandler={() => onSubmit} />
        </form>
      </div>
    </>
  );
}
function Third() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{contents.third}</div>
    </div>
  );
}

const Content = () => {
  const onclicking = () => {
    console.log('click button');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>{contents.first}</div>
      </div>
      <Button text="건의사항 작성하기" onClickHandler={() => onclicking()} />
      <Second />
    </>
  );
};

export default Content;
