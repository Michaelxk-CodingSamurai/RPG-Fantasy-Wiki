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

                    <table className="table">
                        
                        
                        <thead>
                            <img src={this.props.adventures.image} className="img-adventure" alt="" />

                        </thead>

                        <div className='p-4'>
                            <div className="button-group  float-right">
                                <button className='' onClick={() => this.setState({ editing: true })}>edit</button>
                                <button title='Delete' onClick={() => {
                                    this.props.deleteAdventureByID(this.props.adventures._id);
                                    this.setState({ deleted: true })
                                }}> X </button>
                            </div>
                            <h3>{this.props.adventures.name}</h3>
                            <p>{this.props.adventures.genre}</p>
                            <p>{this.props.adventures.description}</p>
                            <h3>Obstacles Encountered On Your Journey</h3>
                        
                        
                        {this.props.adventures.obstacles && this.props.adventures.obstacles.map((object, i) => {
                            return (
                                <div className="row" key={object.a}>
                                    <div className="col-sm">

                                        <img src={object.b} className="img-thumbnail" alt="" />
                                    </div>
                                    <div className="col-sm">
                                        <h5>{i + 1}. {object.a}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    </table>
                }
            </div>
        );
    }
}

export default AdventureProfile;