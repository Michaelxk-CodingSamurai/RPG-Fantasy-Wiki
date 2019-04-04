import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        elements: [],
    }

    componentDidMount() {
        this.getElementByID(this.props.match.params.id)
    }


    getElementByID = (id) => {
        axios.get(`http://localhost:5000/elements/${id}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    elements: res.data
                })
            })
    }


    render() {
        console.log(this.state)
        return (
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Attributes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <h4>{this.state.elements.name}</h4>
                                <p>{this.state.elements.category}</p>
                                <img className="img-thumbnail fluid" src={this.state.elements.image} alt="" />
                            </td>                        
                            {this.state.elements.subcategory && this.state.elements.subcategory.map((object) => {
                                    return (
                                        <tr key ={object.a}>
                                            <td>{object.a} :</td>
                                            <td>{object.b}</td>
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

export default Profile;