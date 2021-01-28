import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }
    
    componentDidMount() {
       
        if(this.cbRef) {
            this.cbRef.focus();
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }

    handleClick = () => {
        alert(`You've written: ${this.inputRef.current.value}`);
    }

    render() {
        return (
            <div>
                <input placeholder="Write..." ref={this.inputRef} />
                <input placeholder="Write something..." ref={this.setCbRef} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
