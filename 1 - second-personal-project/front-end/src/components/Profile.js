import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        elements: [],
        editing: false,
    }

    componentDidMount() {
        this.getElementByID(this.props.match.params.id)
    }

    getElementByID = (id) => {
        axios.get(`http://localhost:5000/elements/${id}`)
            .then(res => {
                this.setState({
                    elements: res.data
                })
            })
    }

    render() {
            return (
                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>Attributes<button className='float-right'>edit</button></th>
                            </tr>
                        </thead>
    
                        <tbody>
                            <tr>
                                <td>
                                    <h4>{this.state.elements.name}</h4>
                                    <p>{this.state.elements.category}</p>
                                    <img className="img-thumbnail" src={this.state.elements.image} alt="" />
                                </td>                        
                                {this.state.elements.subcategory && this.state.elements.subcategory.map((object) => {
                                        return (
                                            <tr className='' key ={object.a}>
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