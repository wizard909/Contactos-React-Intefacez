import React, { Component } from 'react';
import './App.css';
import Contacts from './Componentes/Contactos.js';


class App extends Component{

  state = {
    contacts: []
  }

  componentDidMount(){
    fetch ('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({contacts: data})
    })
    .catch(console.log)

  
  }

  concole(){
    console.log(this.state.contacts)
  }
  render(){
    return(
      <Contacts contacts={this.state.contacts} />
      
    );      
    
  }
}

export default App; 
