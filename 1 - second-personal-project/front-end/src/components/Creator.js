import React, { Component } from 'react';

class Creator extends Component {
    state = {

        name: '',
        category: '',
        img: '',
        a: '',
        b: '',
        subcategory: []

    }


    add = (e) => {

        e.preventDefault();


        let newCategory = [...this.state.subcategory, { a: this.state.a, b: this.state.b }]
        // this.props.creatorInput(this.state.a, this.state.b)


        this.setState({
            subcategory: newCategory,
            a: '',
            b: ''
        })
    }

    elementCreate = (e) => {
        e.preventDefault();
        this.props.addElement(this.state)
        this.setState({

            name: '',
            category: '',
            img: '',
            a: '',
            b: '',
        })
    }


    render() {
        return (
            <div className="form-group">

                <form onSubmit={(e) => this.elementCreate(e)}>
                    <select value={this.state.category}
                        onChange={(e) => this.setState({ category: e.target.value })}>
                        <option>select</option>
                        <option>character</option>
                        <option>location</option>
                        <option>item</option>
                        <option>ability</option>
                    </select>


                    <input value={this.state.a} onChange={(e) => this.setState({ a: e.target.value })} type="text" placeholder="a" />
                    <input value={this.state.b} onChange={(e) => this.setState({ b: e.target.value })} type="text" placeholder="b" />
                    <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder="name" />
                    <input value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} type="text" placeholder="image url" />

                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}

export default Creator;