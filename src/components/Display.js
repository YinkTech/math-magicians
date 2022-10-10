import React from 'react';
import { PropTypes } from 'prop-types';
class Display extends React.Component {
    render() {
        return(
            <div className='display'>
                <span> {this.props.Result} </span>
                <span> {this.props.Operate} </span>
                <span> {this.props.Next} </span>
            </div> 
        );
    };
};

Display.propTypes = {
    Result: PropTypes.number.isRequired,
    Operate: PropTypes.string.isRequired,
    Next: PropTypes.string.isRequired
};

export default Display;
