import React, { Component } from 'react';

class ShowAdventures extends Component {
    state = {}





    render() {
        return (
            <div className="container">
                <table className="container-fluid shadow-lg">
                    <tr className="table shadow-lg table-striped table-bordered">
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    {this.props.adventures.map((adventure, index) =>
                        <tr >
                            <td>{index + 1}</td>
                            <td>
                                <img src={adventure.image} className="img-thumbnail" alt="" />
                                <h5>{adventure.name}</h5>
                           

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