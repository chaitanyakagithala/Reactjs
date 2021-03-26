import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errormsg : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responcse =>{
            this.setState({
                posts : responcse.data
               
            })
           
        })
        .catch(()=>{
            
            this.setState({errormsg : "error retriving data"})
        })
    }
    
    render() {
        const {posts,errormsg} = this.state
        return (
            
            <div >
           {posts.length ? posts.map(post => <div key = {post.id}>{post.title}</div>) : null}
           {errormsg.length ? <div>{errormsg}</div> : null}
            </div>
        )
    }
}

export default PostList
