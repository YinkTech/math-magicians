import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';
class ButtonPanel extends React.Component {
    render() {
        return(
            <div >
                <div>
                    <Button name="AC" className='btnName' handleClick={this.props.clickHandler} />
                    <Button name="+/-" className='btnName' handleClick={this.props.clickHandler} />
                    <Button name="%" className='btnName' handleClick={this.props.clickHandler} />
                    <Button name="÷" className='btnName cal' handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="7" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="8" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="9" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="X" className='btnName cal cal-sec' handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="4" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="5" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="6" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="-" className='btnName cal cal-sec' handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="1" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="2" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="3" className='btnName number' handleClick={this.props.clickHandler} />
                    <Button name="+" className='btnName cal' handleClick={this.props.clickHandler} />
                </div>

                <div>
                    <Button name="0" className='btnName last zero number' handleClick={this.props.clickHandler} />
                    <Button name="." className='btnName last number' handleClick={this.props.clickHandler} />
                    <Button name="=" className='btnName last cal' handleClick={this.props.clickHandler} />
                </div>
            </div>
        );
    };
};

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func
};

export default ButtonPanel;