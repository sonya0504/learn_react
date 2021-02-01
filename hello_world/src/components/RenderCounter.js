import React, { Component } from 'react'

class RenderCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <>
              {this.props.render(this.state.count, this.incrementCount)}  
            </>
        )
    }
}

//second way:

// class RenderCounter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    
//     incrementCount = () => {
//         this.setState(prevState => {
//             return {count: prevState.count + 1}
//         })
//     }

//     render() {
//         return (
//             <>
//               {this.props.chldren(this.state.count, this.incrementCount)}  
//             </>
//         )
//     }
// }

export default RenderCounter
