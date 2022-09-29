import React from 'react';
import Calculate from '../logic/Calculate.js';
import Display from './Display.js';
import ButtonPanel from './ButtonPanel.js';

function App() {
  return (
  <React.Fragment>
    <div>
      <Display />
      <ButtonPanel />
    </div>
  </React.Fragment>
  );
}

export default App;
