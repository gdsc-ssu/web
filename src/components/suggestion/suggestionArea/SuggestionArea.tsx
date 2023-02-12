import React, { useState } from 'react';
import Circle from './circle';
import * as styles from './Suggestion.css';
import Content from './content/content';

const SuggestionArea = () => {
  return (
    <div className={styles.container}>
      <Circle />
      <Content />
    </div>
  );
};

export default SuggestionArea;
