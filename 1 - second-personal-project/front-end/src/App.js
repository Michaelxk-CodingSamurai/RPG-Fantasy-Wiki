import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar'
import Display from './components/Display'

import Creator from './components/Creator';
import Character from './components/categories/Character'
import Location from './components/categories/Location'
import Item from './components/categories/Item'
import Ability from './components/categories/Ability'
import Profile from './components/Profile';
import UpdateForm from './components/UpdateForm'

import ShowAdventures from './adventures/ShowAdventures'
import AdventureProfile from './adventures/AdventureProfile'
// import AddElementToAdventure from './0bsolete Files/AddElementToAdventure'
// import AdventureForm from './0bsolete Files/AdventureForm'
import AdventureCreator from './adventures/AdventureCreator'
import AdventureUpdate from './adventures/AdventureUpdate'


import SearchResults from './components/SearchResults'


class App extends Component {

  state = {
    elements: [],
    adventures: [],
    profile: [],
    adventureProfile: {},
    search: '',
  }

  componentDidMount() {
    this.getElements()
    this.getAdventures()
  }


  deleteElementByID = (id) => {
    axios.delete(`http://localhost:5000/elements/${id}`)

      .then(res => {
        this.getElements();
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

  getElementByID = (id) => {
    axios.get(`http://localhost:5000/elements/${id}`)
      .then(res => {
        this.setState({
          profile: res.data
        })
      })
  }

  updateElementByID = (id, profile) => {
    axios.put(`http://localhost:5000/elements/${id}`, profile)
      .then(res => {
        this.getElements();
        this.setState({
          profile: profile
        })
      })
  }

  createElements = element => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
        this.getElements()
      })
  }

  createAdventures = adventure => {
    axios.post('http://localhost:5000/adventures', adventure)
      .then(res => {
        this.getAdventures()
      })
  }

  
  getAdventures = () => {
    axios.get('http://localhost:5000/adventures')
      .then(res => {
        this.setState({
          adventures: res.data,
        })
      })
  }

  getAdventureByID = (id) => {
    console.log('hitting adventure by id')
    axios.get(`http://localhost:5000/adventures/${id}`)
      .then(res => {
        console.log('hitting hello')

        this.setState({
          adventureProfile: res.data
        })
      })
  }

  deleteAdventureByID = id => {
    axios.delete(`http://localhost:5000/adventures/${id}`)

      .then(res => {
        this.getAdventures()
      })
  }

  updateAdventureByID = (id, adventureProfile) => {
    axios.put(`http:///localhost:5000/adventures/${id}`, adventureProfile)
    .then(res => {
            this.getAdventures();
            this.setState({
              adventureProfile: adventureProfile
            })
          })
  }




  // addElementToAdventure = (id, index) => {
  //   let adventureElement = [...this.state.elements];
  //   let newElement = adventureElement.find(x => x._id === id);
  //   let newAdventures = [...this.state.adventures];
  //   let adventureIndex = newAdventures.findIndex(x => x._id === index);

  //   newAdventures[adventureIndex].elements.push(newElement);

  //   this.setState({
  //       adventures: newAdventures
  //   })
  // }

  updateSearch = (e) => {
    this.setState({
      search: e
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar updateSearch={this.updateSearch} />
        <div id="addSpace">
          <Switch>
            <Route exact path='/' render={() => <Display elements={this.state.elements} getElements={this.getElements} />} />
            <Route path='/creator' render={() => <Creator createElements={this.createElements} />} />
            <Route path='/characters' render={() => <Character elements={this.state.elements} />} />
            <Route path='/locations' render={() => <Location elements={this.state.elements} />} />
            <Route path='/items' render={() => <Item elements={this.state.elements} />} />
            <Route path='/abilities' render={() => <Ability elements={this.state.elements} />} />
            <Route exact path='/profile/:id' render={(renderProps) => <Profile {...renderProps} deleteElementByID={this.deleteElementByID} getElementByID={this.getElementByID} elements={this.state.profile} />} />
            <Route exact path='/profile/edit/:id' render={(renderProps) => <UpdateForm {...renderProps} updateElementByID={this.updateElementByID} getElementByID={this.getElementByID} elements={this.state.profile} />} />
            <Route path='/results' render={() => <SearchResults search={this.state.search} elements={this.state.elements} />} />

            <Route exact path='/adventures' render={() => <ShowAdventures adventures={this.state.adventures} />} />
            <Route exact path='/adventures/:id' render={(renderProps) => <AdventureProfile {...renderProps} deleteAdventureByID={this.deleteAdventureByID} getAdventureByID={this.getAdventureByID} adventures={this.state.adventureProfile} />} />
            <Route path='/adventurecreator' render={() => <AdventureCreator createAdventures={this.createAdventures} />} />
            <Route exact path='/adventures/edit/:id' render={(renderProps) => <AdventureUpdate {...renderProps} updateAdventureByID={this.updateAdventureByID} getAdventureByID={this.getAdventureByID} adventures={this.state.adventureProfile}/>} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;


