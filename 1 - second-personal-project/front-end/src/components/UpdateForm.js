import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
    state = {
        elements: [],
        editing: true,
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
                                <th>Attributes</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            <tr>
                                <td>
                                    <h4><input type="text" value={this.state.elements.name}/></h4>
                                    <p><input type="text" value={this.state.elements.category}/></p>
                                    <input type="text" value={this.state.elements.image} alt="" size="60" />
                                    <div className='updateBtn'><button >Update</button></div>
                                </td>                        
                                {this.state.elements.subcategory && this.state.elements.subcategory.map((object) => {
                                        return (
                                            <tr key ={object.a}>
                                                <td><input type="text" value={object.a} /> :</td>
                                                <td><input type="text" value={object.b}/></td>
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

export default UpdateForm;