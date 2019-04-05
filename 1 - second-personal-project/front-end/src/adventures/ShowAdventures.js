import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowAdventures extends Component {
    state = {}





    render() {
        return (
            <div className="trans container">
                <table className="container-fluid ">
                    <tr className="table shadow-lg">
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    {this.props.adventures.map((adventure, index) =>
                        <tr className="table shadow-lg">
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