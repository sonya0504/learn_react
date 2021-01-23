import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandle () {
        console.log('clicked me');
    };

    render() {

        return (
            <div>
                <button onClick={this.clickHandle}>Clicked me</button>
            </div>
        )
    }
}

export default ClassClick
