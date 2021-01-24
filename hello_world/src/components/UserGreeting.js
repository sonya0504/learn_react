import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             istLoggedIn: true,
        }
    }
    
    render() {

        return this.state.istLoggedIn && <div>Welcome Sonia</div>

        // return this.state.istLoggedIn ? <div>Welcome Sonia</div> : <div>Welcome Guest</div>;

        // let message;

        // if (this.state.istLoggedIn) {
        //     message = <div>Welcome Sonia</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // };

        // return (
        //     message
        // );

        // if (this.state.istLoggedIn) {
        //     return <div>Welcome Sonia</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         Welcome Sonia
        //     </div>
        // )
    }
}

export default UserGreeting
