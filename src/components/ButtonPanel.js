import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {

    render() {
        <button />
        return(
            <div>
                    <div>
                        <button type='button' name='Ac' className='btnColor'>AC</button>
                        <button type='button' name='+/-' className='btnColor'>+/-</button>
                        <button type='button' name='%' className='btnColor'>%</button>
                        <button type='button' name='/' className='btnColor'>/</button>
                    </div>
                    <div>
                        <button type='button' name='7' className='btnColor'>7</button>
                        <button type='button' name='8' className='btnColor'>8</button>
                        <button type='button' name='9' className='btnColor'>9</button>
                        <button type='button' name='*' className='btnColor'>*</button>
                    </div>
                    <div>
                        <button type='button' name='4' className='btnColor'>4</button>
                        <button type='button' name='5' className='btnColor'>5</button>
                        <button type='button' name='6' className='btnColor'>6</button>
                        <button type='button' name='-' className='btnColor'>-</button>
                    </div>
                    <div>
                        <button type='button' name='1' className='btnColor'>1</button>
                        <button type='button' name='2' className='btnColor'>2</button>
                        <button type='button' name='3' className='btnColor'>3</button>
                        <button type='button' name='+' className='btnColor'>+</button>
                    </div>
                    <div>
                        <button type='button' name='0' className='btnColor'>0</button>
                        <button type='button' name='.' className='btnColor'>.</button>
                        <button type='button' name='=' className='btnColor'>=</button>
                    </div>
            </div>
        )
    }
}

export default ButtonPanel;