import React, { Component } from 'react';
import UserContext from './userContext';
import ComponentF from './ComponentF';

 class ComponentE extends Component {

    static contextType  = UserContext;

    render() {
        return (
            <>
            <h2>Component E context {this.context} </h2>
            <ComponentF />
            </>
        )
    }
}

// ComponentE.contextType = UserContext;

export default ComponentE
