import React, { useState, useEffect } from 'react';
import * as styles from './content.css';
import First from './first';
import Second from './second';
import Third from './third';

function Content() {
  const onclicking = () => {
    console.log('click button');
  };

  return (
    <>
      <First />
      <Second />
      <Third />
    </>
  );
}

export default Content;
