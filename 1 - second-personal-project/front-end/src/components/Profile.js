import React, { Component } from 'react';
// import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    state = {
        elements: [],
        editing: false,
        deleted: false,
    }

    componentDidMount() {
        this.props.getElementByID(this.props.match.params.id)
    }

    render() {
       console.log(this.state)
        if (this.state.deleted === true) { return <Redirect to="/" /> }
        if (this.state.editing === true) { return <Redirect to={`/profile/${this.state.elements._id}/edit `}/> }

            return (
                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>Attributes
                                    <button className='float-right'
                                        onClick={() => this.setState({editing: true})}>edit</button>
                                    <button className="float-right"
                                        onClick={() => {this.props.deleteElementByID(this.props.elements._id); this.setState({deleted: true})} }>
                                    X</button>
                                </th>
                            </tr>
                        </thead>
    
                        <tbody>
                            <tr>
                                <td>
                                    <h4>{this.props.elements.name}</h4>
                                    <p>{this.props.elements.category}</p>
                                    <img className="img-thumbnail" src={this.props.elements.image} alt="" />
                                </td>                        
                                {this.props.elements.subcategory && this.props.elements.subcategory.map((object) => {
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