import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Display from './components/Display'
import Creator from './components/Creator';
import Character from './components/categories/Character'
import Location from './components/categories/Location'
import Item from './components/categories/Item'
import Ability from './components/categories/Ability'
import Profile from './components/Profile';

class App extends Component {

  state = {
    elements: [],
  }

  componentDidMount() {
    this.getElements()
  }

  deleteElementByID = (id) => {
    axios.delete(`http://localhost:5000/elements/${id}`)
      .then(res => {
        console.log(res.data)
        this.getElements()
      })
  }


  getElements = () => {
    axios.get('http://localhost:5000/elements')
      .then(res => {
        this.setState({
          elements: res.data,
        })
      })
  }

  createElements = (element) => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
        this.getElements()
      })
  }

  // addElement = (state) => {
  //   let newData = {
  //     name: state.name,
  //     category: state.category,
  //     image: state.img,
  //     subcategory: state.subcategory
  //   }
  //     console.log(newData)
  //     this.createElements(newData)
  // }




  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="addSpace"> 
        <Switch>
          <Route exact path='/' render={() => <Display 
              elements={this.state.elements} deleteElementByID={this.deleteElementByID}/>} />
          <Route path='/creator' render={() => <Creator createElements={this.createElements} />} />
          <Route path='/characters' render={() => <Character elements={this.state.elements} />} />
          <Route path='/locations' render={() => <Location elements={this.state.elements} />} />
          <Route path='/items' render={() => <Item elements={this.state.elements} />} />
          <Route path='/abilities' render={() => <Ability elements={this.state.elements} />} />
          <Route path='/profile/:id' render={(renderProps) => <Profile {...renderProps} />} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;


