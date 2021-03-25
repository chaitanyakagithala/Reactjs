import React from 'react'
const UpdatedComponent = (OriginalComponent,incrementNumber) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        CountHandler = () =>{
          this.setState(PrevState => {
              return {count : PrevState.count+incrementNumber}
          })
        }
        render(){
        return(
         <OriginalComponent
          Increment ={this.CountHandler} 
          count ={this.state.count} 
          {...this.props}

         />)

        }
    }
    return NewComponent
}
export default UpdatedComponent