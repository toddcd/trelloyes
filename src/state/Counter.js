import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        step: 1
    };

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: 0 }
    }

    // addressing the 'this' problem with a fat arrow
    // after the function name '= () =>'
    handleButtonClicked = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + 1 * this.props.step;
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClicked}>                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter