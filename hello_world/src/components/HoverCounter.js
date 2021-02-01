import React, { Component } from 'react';
import withCounter from './withCounter';

export class ClickCounter extends Component {

    render() {
            const { count, incrementCount } = this.props;
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default withCounter(ClickCounter, 10);