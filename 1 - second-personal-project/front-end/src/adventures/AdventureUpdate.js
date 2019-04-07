import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class AdventureUpdate extends Component {
    state = {
        adventureProfile: {
            name: '',
            genre: '',
            image: '',
            description: '',
            a: '',
            b: '',
            obstacles: [],
        },
        editing: true,
    }

    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)

        this.setState({
            adventureProfile: this.props.adventures
        })
    }

    submitUpdate = () => {
        this.props.updateAdventureByID(this.props.match.params.id, this.state.adventureProfile)
        this.setState({
            editing: false
        })
    }

    attUpdater = (key, value, index) => {
        let newobstacles = [...this.state.adventureProfile.obstacles]

        newobstacles[index][key] = value

        this.setState({
            ...this.state,
            adventureProfile: {
                ...this.state.adventureProfile,
                obstacles: newobstacles
            }
        })
    }




    render() {
        if (this.state.editing === false) { return <Redirect to={`/adventures/${this.props.adventures._id}`} /> }
        return (
            <div className="container trans">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name, Image, and Genre</th>
                            <th>Obstacles</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <h4><input value={this.state.adventureProfile.name} onChange={(e) =>
                                    this.setState({ adventureProfile: { ...this.state.adventureProfile, name: e.target.value } })} type="test" /></h4>



                                <div>
                                    <input onChange={(e) => this.setState({ adventureProfile: { ...this.state.adventureProfile, image: e.target.value } })} type="text" value={this.state.adventureProfile.image} alt="" size="60" />
                                </div>
                                <div>
                                    <input onChange={(e) => this.setState({ adventureProfile: { ...this.state.adventureProfile, genre: e.target.value } })} type="text" value={this.state.adventureProfile.genre} alt="" />
                                </div>

                                <div>
                                    <textarea cols="60" rows="7" onChange={(e) => this.setState({ adventureProfile: { ...this.state.adventureProfile, description: e.target.value } })} type="text" value={this.state.adventureProfile.description} alt="" size="60" />
                                </div>
                                <div className="updateB" onClick={this.submitUpdate}> <button className="btn btn-dark btn-lg">Update</button> </div>
                            </td>
                            {this.state.adventureProfile.obstacles && this.state.adventureProfile.obstacles.map((object, index) => {
                                return (
                                    <tr key={index}>
                                        <td><input type="text" value={object.b} onChange={(e) => this.attUpdater('b', e.target.value, index)} /> :</td>
                                        <td><input type="text" value={object.a} onChange={(e) => this.attUpdater('a', e.target.value, index)} /></td>
                                    </tr>
                                )
                            })}







                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdventureUpdate;