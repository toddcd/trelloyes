import React from 'react';

class HelloWorld extends React.Component {
    static defaultProps = {
        step: 1
    };

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { who: 'world' }
    }

    // addressing the 'this' problem with a fat arrow
    // after the function name '= () =>'
    handleButtonClicked = (e) => {
        //console.log('props in handleButtonClick', this.props)
        //console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + 1 * this.props.step;
        if(e.target.id === 'world'){
            this.setState({who: 'world'})
        }else if (e.target.id === 'friend'){
            this.setState({who: 'friend'})
        }else if (e.target.id === 'react') {
            this.setState({who: 'react'})
        }
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who} !</p>
                <button id='world' onClick={this.handleButtonClicked}>World</button>
                <button id='friend' onClick={this.handleButtonClicked}>Friend</button>
                <button id='react' onClick={this.handleButtonClicked}>React</button>
            </div>
        )
    }
}

export default HelloWorld