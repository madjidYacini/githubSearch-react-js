import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Card";
import Card from './components/Card';
import CardList from './components/Cards';
import Form from './components/Form'

class App extends Component {
  state = {
    cards : [
       {
           name : "madjid yacini",
           avatar_url : "https://avatars3.githubusercontent.com/u/26461161?v=4",
           company :"vizzboard"
       },
       {
           "name": "Benjamin Birnbaum",
           "avatar_url": "https://avatars2.githubusercontent.com/u/478?v=4",
           "company": null,
     
     
       }
     ]
     
   }
   addNewCard = (cardInfo)=>{
    // console.log(cardInfo)
    console.log("izane",this.state.cards)
    
    this.setState(prevState =>({
      
      cards :prevState.cards.concat(cardInfo)
    }))
   }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
        <Form onSubmit ={ this.addNewCard } />
        <CardList cards = {this.state.cards} />
      
      </div>
    );
  }
}

export default App;
