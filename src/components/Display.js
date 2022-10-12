import React from 'react';
import { PropTypes } from 'prop-types';

 
const Display = (props) => {
  return (
    <div className='display'>
        <span> {props.Result} </span>
        <span> {props.Operate} </span>
        <span> {props.Next} </span>
    </div> 
  );
};

Display.propTypes = {
    Result: PropTypes.number,
    Operate: PropTypes.string,
    Next: PropTypes.string
};

export default Display;
