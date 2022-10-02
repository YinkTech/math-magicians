import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state= {answer: 0};
    };

    render() {
        const { answer } = this.state;
        return(
                <p > {answer} </p> 
        );
    };
}

export default Display;