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
    selectedID: null,
  }

  componentDidMount() {
    this.getElements()
  }

  getElements = () => {
    axios.get('http://localhost:5000/elements')
      .then(res => {
        console.log(res.data)
        this.setState({
          elements: res.data,
          selectedID: null,
        })
      })
  }

  createElements = (element) => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
      })
  }

  addElement = (state) => {
    let newData = {
      name: state.name,
      category: state.category,
      image: state.img,
      subcategory: state.subcategory
    }
      this.createElements(newData)
  }




  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Display elements={this.state.elements} />} />
          <Route path='/creator' render={() => <Creator addElement={this.addElement} />} />
          <Route path='/characters' render={() => <Character elements={this.state.elements} />} />
          <Route path='/locations' render={() => <Location elements={this.state.elements} />} />
          <Route path='/items' render={() => <Item elements={this.state.elements} />} />
          <Route path='/abilities' render={() => <Ability elements={this.state.elements} />} />
          <Route path='/profile/:id' render={(renderProps) => <Profile {...renderProps} />} />
        </Switch>
      </div>
    );
  }
}

export default App;


