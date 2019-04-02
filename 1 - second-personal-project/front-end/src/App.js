import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Display from './components/Display'

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


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Display elements={this.state.elements}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
