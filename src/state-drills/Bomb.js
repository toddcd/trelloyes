import React from 'react';

class Bomb extends React.Component {

    static defaultProps = {
        steps: 5
    };

    constructor(props) {
        super(props)
        this.state = {pendulum:'tick',
                      count: 1};
    }

    componentDidMount() {
        this.interval = setInterval(() => {

            if(this.state.count % 2 === 0 && this.state.count < this.props.steps){
                const newCount = this.state.count + 1;
                this.setState({ pendulum:'tock' });
                this.setState({ count: newCount });
            }else if (this.state.count % 2 !== 0 && this.state.count < this.props.steps){
                const newCount = this.state.count + 1;
                this.setState({ pendulum:'tick' })
                this.setState({ count: newCount });
            } else {
                this.setState({pendulum:'BOOM!!!!!!'});
            }

        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>{this.state.pendulum}</div>
        )
    }
}

export default Bomb