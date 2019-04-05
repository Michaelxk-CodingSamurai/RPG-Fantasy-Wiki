import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddElementToAdventure extends Component {
    state = {}


    addElementToAdventure = (newElement) => {
        let adventureElement = [...this.props.elements]
        
        console.log(adventureElement)
        // let newAdventure = [...adventureElement.elements, newElement]
        // this.setState({
        //     adventures: newAdventure
        // })
    }


    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }


    render() {
        return (
            <div className="container bg-white">
                <h1>{this.props.adventures.name}</h1>

                <table className="container-fluid shadow-lg">

                    <tr className='table shadow-lg text-lg'>
                        <td>#</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Category</td>
                    </tr>

                    {this.props.elements.map((element, index) =>
                        <tbody key={element._id}>
                            <tr className='tdNoPad shadow-lg' >

                                <td>
                                    <h4 className='text-center'>{index + 1}</h4>
                                </td>
                                <td className=''>
                                    <img className="img-thumbnail imgThumb" src={element.image} alt="" />
                                    <input type="button"
                                        onClick={() => { this.addElementToAdventure(element) }} value="submit" />


                                </td>
                                <td>
                                    <Link className="" button to={`/profile/${element._id}`}><h1 className=''>{element.name}</h1></Link>
                                </td>
                                <td>
                                    <h5 className="">{element.category} </h5>
                                </td>
                            </tr>
                        </tbody>

                    )}
                </table>
                <button><h3>Add These Elements</h3></button>

            </div>



        );
    }
}

export default AddElementToAdventure;