import React from 'react';
import { PropTypes } from 'prop-types';
class Button extends React.Component {
    render() {
        return (
            <button type='button' name={this.props.name} className={this.props.className} onClick={e => this.props.handleClick(e.target.name)} > {this.props.name}</button>
        );
    };
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;