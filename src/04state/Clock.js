import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date:new Date()
        }
        this.timeid = null;
        console.log(this.state)
        // 不要丢失this， 这里很重要
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({
            date:new Date()
        })
    }

    componentDidMount() {   
        this.timeid = setInterval(this.tick,1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeid)
    }
    render() {
        let {date} = this.state
        date = date.toLocaleTimeString()
        return(
            <div>
                <h1>Hello world</h1>
                <h2>{date}</h2>
                <h2>Hello I am Clock.</h2>
            </div>
        )
    }
}

export default Clock;