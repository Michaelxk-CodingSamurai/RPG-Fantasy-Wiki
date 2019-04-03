import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Display from './components/Display'
import Creator from './components/Creator';
import Character from './components/categories/Character'


class App extends Component {

  state = {

    elements: []


  }

  componentDidMount() {
    this.getElements()
  }

  getElements = () => {
    axios.get('http://localhost:5000/elements')
      .then(res => {
        console.log(res.data)
        this.setState({
          elements: res.data
        })
      })
  }

 


  createElements = (element) => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
        console.log(res);
      })
  }


  

  addElement = (state) => {
    let shit = {
      name: state.name,
      category: state.category,
      image: state.img,
      subcategory: state.subcategory
    }
      console.log(shit)
      this.createElements(shit)
  }



 



  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() =>  <Display elements={this.state.elements} />} />
          <Route path='/creator' render={() => <Creator addElement={this.addElement} />} />
        </Switch>
      </div>  
    );
  }
}

export default App;


