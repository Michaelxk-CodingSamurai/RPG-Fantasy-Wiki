import React, { Component } from 'react';

class Display extends Component {
    state = {}
    render() {
        return (
            <div className="container">

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Attributes</th>

                        </tr>
                    </thead>
                    <tbody >
                        {this.props.elements.map((element, index) =>
                            <tr key={element.name}>
                                <th>{index + 1}</th>
                                <td>
                                    <h4>{element.name}</h4>
                                    <p>{element.category}</p>
                                    <img className="img-thumbnail fluid" src={element.image} alt=""/>
                                </td>
                                {element.subcategory.map((object) => {
                                    return (
                                        <div>
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