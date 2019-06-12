import React from 'react';

class TheDate extends React.Component {
    constructor(props){
        super(props);
        this.state = { datetime: new Date() };

    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ datetime: new Date() });

        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {

        return <div>{'The time is: '+this.state.datetime.toLocaleTimeString()}</div>
    }
}

export default TheDate