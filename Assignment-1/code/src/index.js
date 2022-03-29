import React from 'react';
import ReactDOM from 'react-dom';
import TopPart from './TopPart';
import MiddlePart from './MiddlePart';
import BottomPart from './BottomPart';
import './index.css';

const App = () => {
  return (
    <div>
      <TopPart/>
      <MiddlePart/>
      <BottomPart/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root')) 