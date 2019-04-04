import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Display extends Component {
    state = {}

    render() {
        return (
            <div className="container bg-white">

                <table className="container-fluid shadow-lg">

                        <tr className='table shadow-lg text-lg'>
                            <td>#</td>
                            <td></td>
                            <td>Name</td>
                            <td className=''>Category</td>
                        </tr>

                        {this.props.elements.map((element, index) =>

                            <tr className='tdNoPad shadow-lg' key={element._id}>

                                <td>
                                    <h4 className='text-center'>{index + 1}</h4>
                                </td>
                                <td className=''>
                                    <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                                </td>
                                <td>
                                    <Link className="" button to={`/profile/${element._id}`}><h1 classname=''>{element.name}</h1></Link>
                                </td>
                                <td>
                                    <h5 className="">{element.category} </h5>
                                </td>     
                            
                            </tr>
                        )}
                </table>

            </div>
        );
    }
}


export default Display;