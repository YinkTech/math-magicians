import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state= {answer: 0};
    };

    render() {
        const { answer } = this.state;
        return(
            <div>
                <p> {answer} </p>
                <div>
                    <div>
                        <button type='button' className='btnColor'>AC</button>
                        <button type='button' className='btnColor'>+/-</button>
                        <button type='button' className='btnColor'>%</button>
                        <button type='button' className='btnColor'>/</button>
                    </div>
                    <div>
                        <button type='button' className='btnColor'>7</button>
                        <button type='button' className='btnColor'>8</button>
                        <button type='button' className='btnColor'>9</button>
                        <button type='button' className='btnColor'>*</button>
                    </div>
                    <div>
                        <button type='button' className='btnColor'>4</button>
                        <button type='button' className='btnColor'>5</button>
                        <button type='button' className='btnColor'>6</button>
                        <button type='button' className='btnColor'>-</button>
                    </div>
                    <div>
                        <button type='button' className='btnColor'>1</button>
                        <button type='button' className='btnColor'>2</button>
                        <button type='button' className='btnColor'>3</button>
                        <button type='button' className='btnColor'>+</button>
                    </div>
                    <div>
                        <button type='button' className='btnColor'>0</button>
                        <button type='button' className='btnColor'>.</button>
                        <button type='button' className='btnColor'>=</button>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Calculator;