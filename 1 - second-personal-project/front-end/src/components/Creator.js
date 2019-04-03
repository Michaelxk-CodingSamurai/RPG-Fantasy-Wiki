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


    add = () => {

     
        let newCategory = [...this.state.subcategory, {a: this.state.a, b: this.state.b}]
        console.log('derp')
    

        this.setState({
            subcategory: newCategory,
            // a: '',
            b: ''
        })
    }

    elementCreate = (e) => {
        e.preventDefault();
        this.add();
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
                    <select className="selectBox" value={this.state.category}
                    onChange={(e)=> this.setState({category: e.target.value})}>                    
                        <option>select</option>
                        <option>character</option>
                        <option>location</option>
                        <option>item</option>
                        <option>ability</option>
                    </select>
                   
                    <div className="inputBox">
                    <span>Name</span>
                    <input  value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} size="40" type="text" placeholder="name"/>
                    </div>
                    <div className="inputBox">
                    <span>Attributes</span>
                    <input  value={this.state.a} onChange={(e) => this.setState({ a: e.target.value })} size="40" type="text" placeholder=""/>
                    </div>
                    <div className="inputBox">
                    <span>Attributes</span>
                    <input  value={this.state.b} onChange={(e) => this.setState({ b: e.target.value })} size="40" type="text" placeholder=""/>
                    </div> 
                    <div className="inputBox">
                    <span>Image</span>                
                    <input  value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} size="40" type="text" placeholder="image url"/>
                    </div>  
                  

                    
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}

export default Creator;