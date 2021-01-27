// import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

// class ParentComp extends PureComponent {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name: 'Hey!',
//         }
//     }
    
//     componentDidMount(){
//         setInterval(() => {
//             this.setState({
//                 name: 'Hey You!',
//             })
//         }, 2000)
//     }

//     render() {
//         console.log('*******Parent Component*******')
//         return (
//             <>
//                 <PureComp name={this.state.name} />
//                 <RegComp name={this.state.name} />
//             </>
//         )
//     }
// }

import React, { PureComponent } from 'react'

class ParentComp extends PureComponent {
    constructor(props) {
                super(props)
            
                this.state = {
                     name: 'Hey!',
                }
            }
            
            componentDidMount(){
                setInterval(() => {
                    this.setState({
                        name: 'Hey You!',
                    })
                }, 2000)
            }
        
            render() {
                console.log('*******Parent Component*******')
                return (
                    <>
                        <PureComp name={this.state.name} />
                        <RegComp name={this.state.name} />
                    </>
                )
            }
}

export default ParentComp;
