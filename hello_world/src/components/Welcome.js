import React, { Component } from 'react';

class Welcome extends Component {


    render() {

    const { name, heroName, children } = this.props;

        return (
            <div>
                <h2>Welcome {name} a.k.a. {heroName}</h2>
                {children}
            </div>
        )
    }
}

export default Welcome;