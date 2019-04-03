import React, { Component } from 'react';

class Creator extends Component {
    state = {

        name: '',
        category: '',
        img: '',
        attr: '',
        stats: '',
        subcategory: []

    }


    add = (e) => {

        e.preventDefault();

        
        let newCategory = [...this.state.subcategory, {attr: this.state.attr, stats: this.state.stats}]
        // this.props.creatorInput(this.state.attr, this.state.stats)
        


        this.setState({

            subcategory: newCategory,
            attr: '',
            stats: ''


        })

    }

    elementCreate = (e) => {

        e.preventDefault();
        this.props.addElement(this.state)


    }


    render() {
        return (
            <div className="form-group">

                <form onSubmit={(e) => this.elementCreate(e)}>
                    <select value={this.state.category}
                    onChange={(e)=> this.setState({category: e.target.value})}>                    
                        <option>select</option>
                        <option>character</option>
                        <option>location</option>
                        <option>item</option>
                        <option>ability</option>
                    </select>
                   
                    
                    <input value={this.state.attr} onChange={(e) => this.setState({ attr: e.target.value })} type="text" />
                    <input value={this.state.stats} onChange={(e) => this.setState({ stats: e.target.value })} type="text" />
                    <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" />
                    <input value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} type="text" />
                    
                    <button type='submit' className="btn btn-primary">Update</button>
                </form>

            </div>

        );
    }
}

export default Creator;