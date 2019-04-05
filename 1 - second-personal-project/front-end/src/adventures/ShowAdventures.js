import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowAdventures extends Component {
    state = {}





    render() {
        return (
            <div className="container">
                <table className="table container-fluid shadow-lg">
                    <tr className="shadow-lg table-striped table-bordered">
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    {this.props.adventures.map((adventure, index) =>
                        <tr >
                            <td>{index + 1}</td>
                            <td>
                                <img src={adventure.image} className="img-thumbnail" alt="" />
                                
                                <Link className="" button to={`/adventures/${adventure._id}`}><h5 classname=''>{adventure.name}</h5></Link>
     
                           

                            </td>
                    
                            <td><p>{adventure.genre}</p>{adventure.description}</td>
                        </tr>

                    )}

                </table>
            </div>
        );
    }
}




export default ShowAdventures;