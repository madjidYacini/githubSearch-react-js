import React from "react"
import axios from 'axios';


class Form extends React.Component {
    state = {userName : ""}
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('event : for submit', this.state.userName)
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res=>{
            
            this.props.onSubmit(res.data)
        })
        }
    render(){
        return (
            <form style = {{marginTop : 20}} onSubmit ={this.handleSubmit}>
            <input type = "text" 
            value = {this.state.userName }
            onChange = {(event)=>this.setState({userName: event.target.value})}
            placeholder = "Github userName"
             required/>
            <button type = "submit">ADD CARD</button>
            </form>
        )
    }
}

export default Form