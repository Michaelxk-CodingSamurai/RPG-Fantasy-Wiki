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
import AddElementToAdventure from './adventures/AddElementToAdventure'


class App extends Component {

  state = {
    elements: [],
    adventures: [],
    profile: [],
    adventureProfile: [],
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

  getAdventures = () => {
    axios.get('http://localhost:5000/adventures')
      .then(res => {
        this.setState({
          adventures: res.data,
        })
      })
  }

  getAdventureByID = (id) => {
    axios.get(`http://localhost:5000/adventures/${id}`)
      .then(res => {
        this.setState({
          adventureProfile: res.data
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

  createElements = (element) => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
        this.getElements()
      })
  }

  addElementToAdventure = (id, index) => {
    let adventureElement = [...this.state.elements]
    let adventureProfile = [...this.state.adventures]

    let newElement = adventureElement.find(x => x._id === id)
    let adventureIndex = adventureProfile.findIndex(x => x._id === index)

    console.log(newElement)
    console.log(adventureIndex)

    this.setState({

    })
    // let elementToAdventure = [...this.state.adventures, newElement]
    // this.setState({
    //   adventureProfile: elementToAdventure
    // })
  }




  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="addSpace">
          <Switch>
            <Route exact path='/' render={() => <Display elements={this.state.elements} getElements={this.getElements} />} />
            <Route path='/creator' render={() => <Creator createElements={this.createElements} />} />
            <Route path='/characters' render={() => <Character elements={this.state.elements} />} />
            <Route path='/locations' render={() => <Location elements={this.state.elements} />} />
            <Route path='/items' render={() => <Item elements={this.state.elements} />} />
            <Route path='/abilities' render={() => <Ability elements={this.state.elements} />} />

           

            <Route exact path='/profile/:id' render={(renderProps) => <Profile {...renderProps} deleteElementByID={this.deleteElementByID} getElementByID={this.getElementByID} elements={this.state.profile}/>} />
            <Route path='/profile/:id/edit' render={(renderProps) => <UpdateForm {...renderProps} getElementByID={this.getElementByID} elements={this.state.profile}/>} />

            <Route exact path='/adventures' render={() => <ShowAdventures adventures={this.state.adventures} />} />
            <Route exact path='/adventures/:id' render={(renderProps) => <AdventureProfile {...renderProps} getAdventureByID={this.getAdventureByID} adventures={this.state.adventureProfile} />} />
            
            <Route exact path='/adventures/addelements/:id' render={(renderProps) => 
                  <AddElementToAdventure {...renderProps} elements={this.state.elements} adventures={this.state.adventureProfile} getAdventureByID={this.getAdventureByID} 
                    addElementToAdventure={this.addElementToAdventure} />}/>

          
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;


