import React, { Component } from 'react';

class Creator extends Component {
    state = {

        name: '',
        category: '',
        img: '',
        subcategory: [],
    



    }


    add = (e) => {

        e.preventDefault();

        this.props.creatorInput(this.state.attr, this.state.stats)

        this.setState({

            attr: '',
            stats: ''


        })

    }


    render() {
        return (
            <div className="form-group">

                <form onSubmit={(e) => this.add(e)}>
                    <select value={this.state.category}
                    onChange={(e)=> this.setState({category: e.target.value})}>                    
                        <option>select</option>
                        <option>character</option>
                        <option>location</option>
                        <option>item</option>
                        <option>ability</option>
                    </select>
                   
                    
                    <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" />
                    <input value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} type="text" />
                    
                    <button className="btn btn-primary">Update</button>
                </form>

            </div>

        );
    }
}

export default Creator;