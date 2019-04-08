import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowAdventures extends Component {
    state = {}





    render() {
        return (
            <div className="trans container">
                <table className="container-fluid ">
                    <tr className="table shadow-lg h4">
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    {this.props.adventures.map((adventure, index) =>
                        <tr className="table shadow-lg collapse-text">
                            <td>{index + 1}</td>
                            <td className='h4 font-weight-bold'>
                                <img src={adventure.image} className="img-thumbnail" alt="" />
                                
                                <Link className="text-dark" button to={`/adventures/${adventure._id}`}><h5>{adventure.name}</h5></Link>
     
                           

                            </td>
                    
                            <td><p>{adventure.genre}</p>
                                
                                    <div className="adventure">
                                        {adventure.description}
                                    </div>
                             
                                                
                                                
                            </td>
                        </tr>
                        

                    )}

                </table>
            </div>
        );
    }
}




export default ShowAdventures;