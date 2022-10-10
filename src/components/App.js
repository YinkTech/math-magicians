import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel.js';
import Calculate from '../logic/Calculate.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick = (buttonName) => {
    this.setState((state) => Calculate(state, buttonName));
  };
  
  render() {
    return(
      <>
        <Display Result={this.state.total} Operate={this.state.operation} Next={this.state.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  };
};

export default App;