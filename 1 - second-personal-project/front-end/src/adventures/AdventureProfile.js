import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class AdventureProfile extends Component {
    state = {
        adventures: [],
        editing: false,
        deleted: false,
    }



    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }


    render() {
        if (this.state.deleted === true) { return <Redirect to="/adventures" /> }
        if (this.state.editing === true) { return <Redirect to={`/adventures/edit/${this.props.adventures._id}`} /> 
    }
        return (
            <div className="container trans">
                {this.props.adventures &&

                    <table className="table table-striped table-bordered">
                        <button onClick={() => this.setState({ editing: true })}>edit</button>
                        <button title='Delete' onClick={() => {
                            this.props.deleteAdventureByID(this.props.adventures._id);
                            this.setState({ deleted: true })
                        }}> X </button>
                        <thead>
                            <img src={this.props.adventures.image} className="img-adventure" alt="" />

                        </thead>

                        <tbody>
                            <h3>{this.props.adventures.name}</h3>
                            <p>{this.props.adventures.genre}</p>
                            <p>{this.props.adventures.description}</p>
                        </tbody>
                        <h3>Obstacles Encountered On Your Journey</h3>
                        {this.props.adventures.obstacles && this.props.adventures.obstacles.map((object, i) => {
                            return (
                                <div className="row" key={object.a}>
                                    <div className="col-sm">

                                        <img src={object.b} className="img-thumbnail" alt="" />
                                    </div>
                                    <div className="col-sm">
                                        <p>{i + 1}. {object.a}</p>
                                    </div>
                                </div>
                            )
                        })}



                    </table>
                }
            </div>
        );
    }
}

export default AdventureProfile;