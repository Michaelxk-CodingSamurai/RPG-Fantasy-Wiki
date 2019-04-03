import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        elements: [],
        // elements: [
        //     {
        //         id: 1234,
        //         name: 'Elric the Pale',
        //         category: "character",
        //         image:"https://www.imperial-library.info/sites/default/files/imagecache/node-gallery-display/gallery_files/mw_DarkElf1024.jpg",
        //         subcategory: [
        //             {a: 'race', b: 'Dark Elf'},
        //             {a: "class", b: 'spell-sword'},
        //             {a: "gender", b: 'male'},
        //             {a: "abilities", b: "Drain Life, Dragon Fire, Vampiric Touch, Conceal Form"},
        //             {a: "traits", b: "Master Swordsman, Adept Fire Mage, Warlord, Sociopath"},
        //             {a: "equipment", b:"Ebony Armor, Sword of the Daedra, Necronomicon"},
        //             {a: "mounts", b: "Doomsteed, Red Hydra"},
        //         ],
        //     },

        // ],
        // currentProfile: null,
    }

    componentDidMount() {
        this.getElementByID(this.props.match.params.id)
    }


    getElementByID = (id) => {
        axios.get(`http://localhost:5000/elements/${id}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    elements: res.data
                })
            })
    }






    // getElements = (id) => {
    //     axios.get('http://localhost:5000/elements/:id')
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 elements: res.data,
    //                 currentProfile: null,
    //             })
    //         })
    // }

    // componentDidMount() {

    //     let id = this.props.match.params.id;
    //     this.getElements(id)
    //     let profile = this.state.elements.filter(elements => elements.id == id)[0];

    //     this.setState({
    //         currentProfile: profile
    //     })
    // }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Attributes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <h4>{this.state.elements.name}</h4>
                                <p>{this.state.elements.category}</p>
                                <img className="img-thumbnail fluid" src={this.state.elements.image} alt="" />
                            </td>                        
                            {this.state.elements.subcategory && this.state.elements.subcategory.map((object) => {
                                    return (
                                        <tr key ={object.a}>
                                            <td>{object.a} :</td>
                                            <td>{object.b}</td>
                                        </tr>
                                    )
                                })}

                        </tr>
                    </tbody>
                </table>
            </div>


        );
    }
}

export default Profile;