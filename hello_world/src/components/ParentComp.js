import React, { PureComponent, Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
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
                        <MemoComp name={this.state.name} />
                    </>
                )
            }
}

export default ParentComp;
