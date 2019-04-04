import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Display extends Component {
    state = {}

    render() {

        return (
            <div className="container bg-white">

                <table className="container-fluid shadow-lg">

                    <tr className='table shadow-lg text-lg'>
                        <td>#</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Category</td>
                    </tr>

                    {this.props.elements.map((element, index) =>

                        <tr className='tdNoPad shadow-lg' key={element._id}>

                            <td>
                                <h4 className='text-center'>{index + 1}</h4>
                            </td>
                            <td>
                                <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                            </td>
                            <td>

                                <td>
                                    <h4 className='text-center'>{index + 1}</h4>
                                </td>
                                <td className=''>
                                    <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                                </td>
                               
                                <td className='my-3'>
                                    <Link  button to={`/profile/${element._id}`}><h1 >{element.name}</h1></Link>
                                </td>
                                    <h5>{element.category} </h5>
                                   
                            
                            </tr>
                        )}
                </table>

            </div>
        );
    }
}


export default Display;