import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import Button from '../../../common/Button/Button';

function Second() {
  const [content, setContent] = useState([{ content: '' }]);
  let [inputValue, setInputValue] = useState('');
  let [newContent, setNewContent] = useState({ content: '' });

  const inputChg = (e: any) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setNewContent({ content: inputValue });
    setContent([...content, newContent]);
    setInputValue('');
  };

  const onCancel = (e: any) => {
    return;
  };

  useEffect(() => {
    setNewContent({ content: inputValue });
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem('suggestion', JSON.stringify(content));
  }, [content]);

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
          <Button text="작성 취소하기" onClickHandler={() => onCancel} />
          <Button text="건의사항 전송하기" onClickHandler={() => onSubmit} />
        </form>
      </div>
    </>
  );
}

export default Second;
