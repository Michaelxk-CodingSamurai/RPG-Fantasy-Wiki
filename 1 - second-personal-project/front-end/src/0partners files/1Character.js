import React, { Component } from 'react';

class Characters extends Component {
    state = {

        attr: '',
        stats: '',
        

    }


    add = (e) => {

        e.preventDefault();

        this.props.characterInput(this.state.attr, this.state.stats)

        this.setState({

            attr: '',
            stats: ''


        })

    }

    

 



    render() {
        return (
            <div className="form-group">

                <form onSubmit={(e) => this.add(e)}>
                {/* <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text"></input>
                <select className="form-control"
                    value={this.state.category}
                    onChange={(e) => this.setState({ category: e.target.value })}>
                    <option>Select Topic</option>
                    <option>Characters</option>
                </select> */}
                 
                <input value = {this.state.attr} onChange={(e) => this.setState({attr: e.target.value})} type="text" />
                <input value = {this.state.stats} onChange={(e) => this.setState({stats: e.target.value})}type="text" />
                <button className="btn btn-primary">Update</button>
                </form>
             
            </div>

        );
    }
}

export default Characters;