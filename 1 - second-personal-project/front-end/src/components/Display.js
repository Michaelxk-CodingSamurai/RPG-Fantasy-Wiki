import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Display extends Component {
    state = {}

    render() {

        return (
            <div className="container compedium trans">
                
                <table className="container table-bordered">

                        <tr className='table'>
                            <td className="tableHeaders">#</td>
                            <td className="tableHeaders">Image</td>
                            <td className="tableHeaders">Name</td>
                            <td className="tableHeaders">Category</td>
                        </tr>
                        
                        {this.props.elements.map((element, index) =>
                            
                            <tr className='tdNoPad' key={element._id}>

                                <td>
                                    <h4 className='text-center'>{index + 1}</h4>
                                </td>
                                <td className=''>
                                    <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                                </td>
                               
                                <td className='my-3'>
                                    <Link  button to={`/profile/${element._id}`}><h1>{element.name}</h1></Link>
                                </td>
                                    <h4 className='my-3'>{element.category} </h4>
                                   
                            
                            </tr>
                        )}
                </table>
                </div>

           
        );
    }
}


export default Display;