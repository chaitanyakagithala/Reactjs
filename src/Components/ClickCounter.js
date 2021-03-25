import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
 class ClickCounter extends Component {
     
     
    render() {
        const {count,Increment} = this.props
        return (
            
            <div>
                <button onClick={Increment} > { this.props.name}  clickCounter {count} times</button>
            </div>
        )
    }
}

export default   UpdatedComponent(ClickCounter,5)
