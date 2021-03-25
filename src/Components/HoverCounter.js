import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    render() {

        const {count,Increment} = this.props
        return (
            <div>
             <button onMouseOver = {Increment}> HoverCounter {count} </button>
                
            </div>
        )
    }
}

export default  UpdatedComponent( HoverCounter,10)
