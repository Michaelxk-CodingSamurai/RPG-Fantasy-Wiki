import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class UpdateForm extends Component {
    state = {
        elements: [],
        editing: true,
    }

    componentDidMount() {
        this.getElementByID(this.props.match.params.id)
    }

    updateFields = (e) => {
        console.log(this.state.elements)
        // let newElements = [...this.state.elements]

        // console.log(newElements)
        // newElements.category: e
        // this.setState({ category: e })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name, etc... </th>
                            <th>Attributes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <h4><input onChange={(e) => this.updateFields(e)} type="text" value={this.state.elements.name} /></h4>

                                <div className='dropdown'>
                                    <select className="btn btn-secondary dropdown-toggle two" value={this.state.category}
                                        onChange={(e) => this.updateFields(e)}>
                                        <option>select category</option>
                                        <option>Character</option>
                                        <option>Location</option>
                                        <option>Item</option>
                                        <option>Ability</option>
                                    </select>
                                </div> 

                                
                                <input onChange={(e) => this.updateFields(e)} type="text" value={this.state.elements.image} alt="" size="60" />
                                <div className='updateBtn'><button >Update</button></div>
                            </td>
                            {this.state.elements.subcategory && this.state.elements.subcategory.map((object) => {
                                return (
                                    <tr key={object.a}>
                                        <td><input type="text" value={object.a} /> :</td>
                                        <td><input type="text" value={object.b} /></td>
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