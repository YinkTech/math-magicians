import React, { useState } from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel.js';
import Calculate from '../logic/Calculate.js';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick =(e) => {
    setState({ ...state, ...Calculate(state, e.target.name) });
  }

  return (
    < >
    <div className='calBody'>
      <Display Result={state.total} Operate={state.operation} Next={state.next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
    </>
  );
};

export default App;