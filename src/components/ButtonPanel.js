import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';
class ButtonPanel extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Button name="AC" handleClick={this.props.clickHandler} />
                    <Button name="+/-" handleClick={this.props.clickHandler} />
                    <Button name="%" handleClick={this.props.clickHandler} />
                    <Button name="/" handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="7" handleClick={this.props.clickHandler} />
                    <Button name="8" handleClick={this.props.clickHandler} />
                    <Button name="9" handleClick={this.props.clickHandler} />
                    <Button name="*" handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="4" handleClick={this.props.clickHandler} />
                    <Button name="5" handleClick={this.props.clickHandler} />
                    <Button name="6" handleClick={this.props.clickHandler} />
                    <Button name="-" handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="1" handleClick={this.props.clickHandler} />
                    <Button name="2" handleClick={this.props.clickHandler} />
                    <Button name="3" handleClick={this.props.clickHandler} />
                    <Button name="+" handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="0" handleClick={this.props.clickHandler} />
                    <Button name="." handleClick={this.props.clickHandler} />
                    <Button name="=" handleClick={this.props.clickHandler} />
                </div>
            </div>
        );
    };
};

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func
};

export default ButtonPanel;