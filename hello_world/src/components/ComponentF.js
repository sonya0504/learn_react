import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                { context => {
                    return <div>ComponentF welcome {context}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF;
