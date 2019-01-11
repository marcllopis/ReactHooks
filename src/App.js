import React from 'react';
import { Count } from './components/count/count';
import { Sentence } from './components/sentence/sentence';
import { Summary } from './components/summary/summary';


function App() {
  return (
    <div>
      <div className='container'>
        <Count />
        <Sentence />
      </div>
      <div className='container'>
        <Summary />
      </div>
    </div>
  );
};

export default App;
