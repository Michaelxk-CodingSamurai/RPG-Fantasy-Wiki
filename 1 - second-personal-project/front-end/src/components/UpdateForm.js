import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css'

class UpdateForm extends Component {
    state = {
        profile: {
            name: '',
            category: '',
            image: '',
            a: '',
            b: '',
            subcategory: [],
        },
        editing: true,
        
    }

    componentDidMount() {
        this.props.getElementByID(this.props.match.params.id)

        this.setState({
            profile: this.props.elements
        })
    }

    submitUpdate = () => {
        this.props.updateElementByID(this.props.match.params.id, this.state.profile)
        this.setState({
            editing: false
        })
    }

    attUpdater = (key, value, index) => {
        let newsubcats = [...this.state.profile.subcategory]

        newsubcats[index][key] = value

        this.setState({
            ...this.state,
            profile: {
                ...this.state.profile,
                subcategory: newsubcats
            }
        })
    }

    // updateFields = (e) => {
            
    //     let newProfile = this.state.profile
            
    //     newProfile.name = e
            
    //     this.setState({
    //         profile: newProfile
    //     })
        
    // }

    render() {
        if (this.state.editing === false) { return <Redirect to={`/profile/${this.props.elements._id}`} /> }
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
                                <h4><input value={this.state.profile.name} onChange={(e) => this.setState({ profile: {...this.state.profile, name: e.target.value} })} type="text" /></h4>

                                <div className='dropdown'>

                                    <select className="btn btn-secondary dropdown-toggle two"
                                        onChange={(e) => this.setState({ profile: {...this.state.profile, category: e.target.value}  })}>
                                        <option>{ this.state.profile.category }</option>
                                        <option>Character</option>
                                        <option>Location</option>
                                        <option>Item</option>
                                        <option>Ability</option>
                                    </select>
                                </div>


                                <input onChange={(e) => this.setState({profile: {...this.state.profile, image: e.target.value} })} type="text" value={this.state.profile.image} alt="" size="60" />
                                <div className='updateBtn' onClick = {this.submitUpdate}><button className="btn btn-dark btn-lg">Update</button></div>
                            </td>
                            {this.state.profile.subcategory && this.state.profile.subcategory.map((object, index) => {
                                return (
                                    <tr key={index}>
                                        <td><input type="text" value={object.a} onChange={(e) => this.attUpdater('a', e.target.value, index) }/> :</td>
                                        <td><input type="text" value={object.b} onChange={(e) => this.attUpdater('b', e.target.value, index) }/></td>
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