import React, { Component } from 'react'

export class refsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler = ()  => {
        alert(this.inputRef.current.value)
    }

    
    render() {
        return (
            <div>
                <input type = 'text' ref = {this.inputRef}></input>
                <button onClick = {this.clickHandler}>vlick</button>
            </div>
        )
    }
}

export default refsDemo
