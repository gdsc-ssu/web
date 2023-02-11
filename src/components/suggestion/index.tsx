import React from 'react';
import './app.css';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import SuggestionArea from './suggestionArea/SuggestionArea';

const Suggestion = () => {
  return (
    <>
      <Breadcrumb
        title={'건의사항'}
        subTitle={
          'GDSC SSU에 전하고 싶은 내용이 있다면, 얼마든지 작성해주세요!'
        }
      />
      <SuggestionArea />
    </>
  );
};

export default Suggestion;
