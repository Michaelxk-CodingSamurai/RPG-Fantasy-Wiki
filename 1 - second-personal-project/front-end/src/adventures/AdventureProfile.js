import React, { Component } from 'react';
import axios from 'axios'


class AdventureProfile extends Component {
    state = {
        adventures: [],
        editing: false,
    }



    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }

    // getAdventureByID = (id) => {
    //     axios.get(`http://localhost:5000/adventures/${id}`)
    //       .then(res => {
    //         this.setState({
    //           adventures: res.data
    //         })
    //       })
    //   }

    render() {
        return (
            <div className="container">
                {this.props.adventures &&

                <table className="table table-striped table-bordered">
                    <thead>
                        <img src={this.props.adventures.image} className="img-adventure" alt=""/>
                    </thead>
                    <tbody>
                        <h3>{this.props.adventures.name}</h3>
                        <p>{this.props.adventures.genre}</p>
                        <p>{this.props.adventures.description}</p>
                        
                    </tbody>




                </table>
                }

            </div>
        );
    }
}

export default AdventureProfile;