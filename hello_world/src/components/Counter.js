import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }

    increment () {
        // this.setState({
        //     counter: this.state.counter + 1,
        // },
        // () => {
        //     console.log('state: ', this.state.counter);
        // }
        // )


        this.setState((prevState, props) => ({
            counter: prevState.counter + props.addValue,
        }))
        console.log(this.state.counter);
    }

    incrementFive () {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={ () => this.increment() }>Increment</button>
            </div>
        )
    }
}

export default Counter;
