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

                        <th className='h1 mb-0 pb-0'>
                            <h5>{this.props.elements.category}</h5>{this.props.elements.name}
                            <div className="float-right btn-group">
                                <button className='btn-sm' onClick={() => this.setState({ editing: true })}>edit</button>
                                <button className='btn-sm' title='Delete' onClick={() => {
                                    this.props.deleteElementByID(this.props.elements._id);
                                    this.setState({ deleted: true })
                                }}> X </button>
                            </div>
                        </th>
                    
                    </thead>
                </table>

                <div className='p-1 trans d-flex flex-column p-5'>
                    <img className="imgclass mx-auto border border-dark rounded-lg" src={this.props.elements.image} width="100%" alt="" />

                    <div className='m-1 p-2 txtbox'>
                    <th className='pb-0 mb-0'> <h3 className='float-left pb-0'> <u>Attributes</u> </h3></th>
                        {this.props.elements.subcategory && this.props.elements.subcategory.map((object) => {
                            return (

                                <div key={object.a}>

                                    <div className='inline mb-auto '>
                                        <tc className='font-weight-bold h4'>{object.a}: </tc>
                                        <tc>{object.b}</tc>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}


export default Profile;