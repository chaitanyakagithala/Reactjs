import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          parentName :"parent"
     }
     this.greetParent = this.greetParent.bind(this)
 }
 greetParent(child){
     alert(`hello ${this.state.parentName} from ${child}`)
 }
 

    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
