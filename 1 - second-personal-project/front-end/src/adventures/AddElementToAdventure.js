import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddElementToAdventure extends Component {
    state = {
        adventures: []
    }


    addElementToAdventure = (newElement) => {
        let newAdventure = [...this.state.adventures.elements, newElement]
        this.setState({
            adventures: newAdventure
        })
    }

  
    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }


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
                            <td className=''>
                                <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                                <input type="checkbox" className="element-check-box"
                                    onClick ={() => {this.addElementToAdventure(element)}}/>


                            </td>
                            <td>
                                <Link className="" button to={`/profile/${element._id}`}><h1 classname=''>{element.name}</h1></Link>
                            </td>
                            <td>
                                <h5 className="">{element.category} </h5>
                            </td>
                        </tr>
                    )}

                    <button><h3>Add These Elements</h3></button>
                </table>

            </div>



        );
    }
}

export default AddElementToAdventure;