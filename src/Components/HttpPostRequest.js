import React, { Component } from 'react'
import axios from  'axios'

 class HttpPostRequest extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId : '',
              title : '',
              body : ''
         }
     }
     ChangeHandler = e =>{
         this.setState({[e.target.name]:e.target.value})
     }
     submitHandler = (e) =>{
       e.preventDefault()
       axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
       .then(response  =>{
       console.log(response)
       })
       .catch(()=>{
           console.log("error")
       })
     }
     
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                <div>
                <input 
                 type="text"
                 name = "userId"
                 value = {userId}
                 onChange = {this.ChangeHandler}
                  />
                </div>
                <div>
                <input
                 type="text"
                  name = "title" 
                  value = {title} 
                  onChange = {this.ChangeHandler}
                  />
                </div> 
                 <div>
                 <input 
                 type="text" 
                 name = "body" 
                 value={body}
                 onChange = {this.ChangeHandler}
                 />
                </div>  
                <button type = "submit">    Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default HttpPostRequest
