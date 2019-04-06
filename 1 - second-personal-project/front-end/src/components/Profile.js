import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    state = {
        // elements: [],
        editing: false,
        deleted: false,
    }

    componentDidMount() {
        this.props.getElementByID(this.props.match.params.id)
    }



    render() {
        if (this.state.deleted === true) { return <Redirect to="/" /> }
        if (this.state.editing === true) { return <Redirect to={`/profile/edit/${this.props.elements._id}`} /> }

        return (
            <div className="container font-weight-bold">
                <table className="table trans table-striped table-bordered">
                    <thead>
                        <th className='h1 mb-0 pb-0'><h5>{this.props.elements.category}</h5>{this.props.elements.name}</th>
                          <th className='pb-0 mb-0'> <h3 className='float-left pb-0'> <u>Attributes</u> </h3>

                            <div className="float-right">
                                <button onClick={() => this.setState({ editing: true })}>edit</button>
                                <button title='Delete' onClick={() => { this.props.deleteElementByID(this.props.elements._id); 
                                    this.setState({ deleted: true }) }}> X </button>
                            </div>
                              
                            </th>  
                                    
              
                        
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                
                                
                                <img className="" src={this.props.elements.image} width="100%" alt="" />
                            </td>
                            {this.props.elements.subcategory && this.props.elements.subcategory.map((object) => {
                                return (
                                    <table>
                                        <tr className='' width='100%' key={object.a}>
                                            <td>{object.a} :</td>
                                            <td>{object.b}</td>
                                        </tr>
                                    </table>

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