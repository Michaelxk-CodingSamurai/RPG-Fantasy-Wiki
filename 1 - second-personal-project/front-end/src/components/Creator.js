import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Creator extends Component {
    state = {

        name: '',
        category: '',
        image: '',
        a: '',
        b: '',
        subcategory: [],
        done: false
    }


    add = () => {
        let newCategory = [...this.state.subcategory, { a: this.state.a, b: this.state.b }]

        this.setState({
            subcategory: newCategory,
            a: '',
            b: ''
        })
    }

    delete = (index) => {
        let newCategory = [...this.state.subcategory];
        newCategory.splice(index, 1)
        this.setState({
            subcategory: newCategory
        })
        console.log(index)
    }

    elementCreate = (e) => {
        e.preventDefault();

        if (this.state.name !== '' && this.state.category !== '') {
            this.props.createElements(this.state)
            this.setState({

                name: '',
                category: '',
                image: '',
                a: '',
                b: '',
                subcategory: [],
                done: true
            })
        } else { alert("Name and Category are required.") }

    }

    render() {
        if (this.state.done === true) { return <Redirect to="/" /> }
        return (

            <div className="form-group">

                <form onSubmit={(e) => this.elementCreate(e)}>
                    <div className="shadow-lg p-3 mb-5 trans rounded ">

                        <div className='dropdown inline m-auto inputBox d-flex flex-row'>

                            <select className="btn btn-secondary dropdown-toggle m-2 ml-4" value={this.state.category}
                                onChange={(e) => this.setState({ category: e.target.value })}>
                                <option>select category</option>
                                <option>Character</option>
                                <option>Location</option>
                                <option>item</option>
                                <option>Ability</option>
                            </select>

                            <h6 className='my-auto p-1'>Required*</h6>

                        </div>


                        <div className="inputBox inline d-flex flex-row">
                            <span>Name:</span>
                            <input className="one" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} size="40" type="text" placeholder="..." />
                            <h6 className='my-auto p-1'>Required*</h6>
                        </div>

                        <div className="inputBox">
                            <span>Image:</span>
                            <input className="one" value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} size="40" type="text" placeholder="image url..." />
                        </div>

                        <div className="attrBox">
                            <h3>Subcategories</h3> <h6>(example...Health: 100)</h6>
                            <span>Attribute:</span>
                            <input className="one" value={this.state.a} onChange={(e) => this.setState({ a: e.target.value })} size="40" type="text" placeholder="" />
                            <span id="colon">:</span>
                            <input value={this.state.b} onChange={(e) => this.setState({ b: e.target.value })} size="40" type="text" placeholder="" />
                            <div id="addbtn" onClick={this.add} className="btn btn-secondary"> add</div>
                            <div id="subcats">
                                {this.state.subcategory.map((obj, index) => {
                                    return (
                                        <ul>
                                            <li className="listnostyle">{obj.a} : {obj.b}</li>
                                        </ul>
                                    )
                                }
                                )}
                            </div>
                            {/* <button onClick={this.delete(index)} className="btn btn-secondary">x</button> */}
                        </div>
                        <div id="btn">

                            <button type='submit' className="alert btn btn-dark btn-lg">Make it Happen</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default Creator;