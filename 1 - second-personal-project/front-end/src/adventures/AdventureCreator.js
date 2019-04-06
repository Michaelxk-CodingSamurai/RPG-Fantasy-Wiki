import React, { Component } from 'react';

class AdventureCreator extends Component {
    state = {
        name: "",
        genre: "",
        image: "",
        description: "",
        a: "",
        b: "",
        obstacles: []
    }

    add = () => {
        let newObstacle = [...this.state.obstacles, { a: this.state.a, b: this.state.b }]

        this.setState({
            obstacles: newObstacle,
            a: "",
            b: ""
        })
    }

    adventureCreate = (e) => {
        e.preventDefault();

        this.props.createAdventures(this.state)
        this.setState({
            
            name: "",
            genre: "",
            image: "",
            description: "",
            a: "",
            b: "",
            obstacles: []
        })
    }


    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.adventureCreate(e)}>
                    <div className="shadow-lg p-3 mb-5 trans rounded">
                        <div className="inputBox">
                            <span>Name:</span>
                            <input className="one" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} size="40" type="text" placeholder="..." />
                        </div>
                        <div className="inputBox">
                            <span>Genre:</span>
                            <input className="one" value={this.state.genre} onChange={(e) => this.setState({ genre: e.target.value })} size="40" type="text" placeholder="Genre..." />
                        </div>
                        <div className="inputBox">
                            <span>Image:</span>
                            <input className="one" value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} size="40" type="text" placeholder="image url..." />
                        </div>

                        <div className="inputBox">
                            <span>Description:</span>
                            <textarea cols="75" rows="4" className="one" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} size="40" type="text" placeholder="Description of You Adventure" />
                        </div>
                        <div className="attrBox">
                            <h3>Obstacles</h3> <h6>(Enter Your image and Description)</h6>
                            <span>New Enemy: </span>
                            <input className="one" value={this.state.b} onChange={(e) => this.setState({ b: e.target.value })} size="40" type="text" placeholder="Enter Image Url" />
                            <span id="colon">:</span>
                            <textarea cols="70" rows="4" value={this.state.a} onChange={(e) => this.setState({ a: e.target.value })} size="40" type="text" placeholder="Write Something About this Obstacle" />
                            <div id="addbtn" onClick={this.add} className="btn btn-secondary"> add</div>
                            <div id="subcats">
                                {this.state.obstacles.map((obj) =>
                                    <ul>
                                        <li className="listnostyle">{obj.a} : {obj.b}</li>
                                    </ul>
                                )}
                            </div>
                            <div className="btn">
                                <button type='submit' className="btn btn-dark btn-lg">Test Your Resolve</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdventureCreator;