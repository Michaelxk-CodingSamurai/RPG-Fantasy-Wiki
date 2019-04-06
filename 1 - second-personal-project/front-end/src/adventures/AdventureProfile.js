import React, { Component } from 'react';



class AdventureProfile extends Component {
    state = {
        adventures: [],
        editing: false,
    }



    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }


    render() {
        return (
            <div className="container trans">
                {this.props.adventures &&

                    <table className="table table-striped table-bordered">
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
                                    
                                      <img src={object.b} className="img-thumbnail" alt=""/>
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