import React, { Component } from 'react';
import Display from './Components/Display';
import Character from './Components/Character';
import './App.css';

class App extends Component {

  state = {

    subCategory: []

  } 



  addToCategory = (a, b) => {

    let newStats = [...this.state.subCategory, {a, b}]

    this.setState({

      subCategory: newStats

    })

}



  render() {
    return (
      <div className="App">
        <Character characterInput={this.addToCategory}/>
        <Display characterStats={this.state.subCategory}/>
         
      </div>
    );
  }
}

export default App;
