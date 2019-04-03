import React, { Component } from 'react';

class Display extends Component {
    state = {}

    render() {
        return (
            <div className="container">

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Attributes</th>
                        </tr>
                    </thead>
                    
                    <tbody >
                        {this.props.elements.map((element, index) =>
                            <tr key={element._id}>
                                <td>
                                    <h4>{element.name}</h4>
                                    <h5>ID: {element._id}</h5>
                                    <h6>{element.category}</h6>
                                    <img className="img-thumbnail fluid" src={element.image} alt="" />
                                </td>
                                {element.subcategory.map((object, i) => {
                                    return (
                                        <div key={i}>
                                            <td>{object.a}</td>
                                            <td>{object.b}</td>
                                        </div>
                                    )
                                })}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}


export default Display;