import React from 'react';
import { PropTypes } from 'prop-types';
class Button extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    };
    render() {
        return (
            <button type='button' name={this.props.name} className='btnColor'>{this.props.name}</button>
        );
    };
}

Button.propTypes = {
    name: PropTypes.string
  };

export default Button;