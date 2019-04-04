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
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <img src={this.state.adventures.image} alt=""/>
                    </thead>
                    <tbody>
                        <th>{this.state.adventures.name}</th>

                        
                    </tbody>





                </table>
            </div>
        );
    }
}

export default AdventureProfile;