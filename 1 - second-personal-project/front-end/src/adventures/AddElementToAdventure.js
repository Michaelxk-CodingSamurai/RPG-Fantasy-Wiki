import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddElementToAdventure extends Component {
    state = {
        adventureProfile: this.props.adventures
    }


    componentDidMount() {
        console.log(this.props)
        this.props.getAdventureByID(this.props.match.params.id)
        // if(this.props.adventures.length > 0) {
        //     this.setState({
        //         adventureProfile: this.props.adventures
        //     })
        // }
    }

    


    render() {
        return (
            <div className="container bg-white">
                <h1>{this.props.adventures.name}</h1>
                <img src={this.props.adventures.image} alt="" className="img-thumbnail"/>

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
                                        onClick={() => { this.props.addElementToAdventure(element._id, this.props.match.params.id) }} value="submit" />


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