import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                            <tr key={element._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <Link button to={`/profile/${element._id}`}><h3>{element.name}</h3></Link>
                                    <p>{element.category} </p>
                                    <img className="img-thumbnail fluid" src={element.image} alt="" />
                                </td>
                                {element.subcategory.map((object) => {
                                    return (
                                        <tr key ={object.a}>
                                            <td>{object.a} :</td>
                                            <td>{object.b}</td>
                                        </tr>
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