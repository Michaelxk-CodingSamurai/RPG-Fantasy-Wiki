import React, { Component } from 'react';
import { Link } from "react-router-dom"



class Display extends Component {
    state = {}

    render() {

        return (
            <div className="container trans">
                
                <table className="container-fluid ">

                        <tr className=' shadow-lg'>
                            <td className="tableHeaders py-2">#</td>
                            <td className="tableHeaders">Image</td>
                            <td className="tableHeaders">Name</td>
                            <td className="tableHeaders">Category</td>
                        </tr>
                        
                        {this.props.elements.map((element, index) =>
                            
                            <tr className='tdNoPad shadow-lg' key={element._id}>

                                <td>
                                    <h4 className='text-center'>{index + 1}</h4>
                                </td>
                                <td className=''>
                                    <img className="imgthumbs" src={element.image} alt="" />
                                </td>
                               
                                <td className='my-3'>
                                   <a className='text-dark' href={`/profile/${element._id}`}><h1>{element.name}</h1></a>
                                </td>
                                    <h4 className='my-5'>{element.category} </h4>
                                                               
                            </tr>
                        )}
                </table>
                </div>

           
        );
    }
}


export default Display;