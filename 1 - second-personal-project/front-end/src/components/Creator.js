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

        this.setState({
            subcategory: newCategory,
            a: '',
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
            subcategory: []
           
        })
    }


    render() {
        return (
            <div className="form-group">

                <form onSubmit={(e) => this.elementCreate(e)}>
                    <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded">
                    <select className="selectBox" value={this.state.category}
                    onChange={(e)=> this.setState({category: e.target.value})}>                    
                        <option>select</option>
                        <option>character</option>
                        <option>location</option>
                        <option>item</option>
                        <option>ability</option>
                    </select>
                    
                    <div className="inputBox">
                    <span>Name:</span>
                    <input className="one" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} size="40" type="text" placeholder="..."/>
                    </div>
                   
                    <div className="inputBox">
                    <span>Image:</span>                
                    <input  className="one" value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} size="40" type="text" placeholder="image url..."/>
                    </div>  

                    <div className="attrBox">
                        <span>Attributes:</span>
                        <input  className="one" value={this.state.a} onChange={(e) => this.setState({ a: e.target.value })} size="40" type="text" placeholder=""/>
                        <span id="colon">:</span>
                        <input  value={this.state.b} onChange={(e) => this.setState({ b: e.target.value })} size="40" type="text" placeholder=""/>
                        <div className="one" onClick={this.add} className="btn btn-light"> add</div>
                        {this.state.subcategory.map((obj) => 
                            <div>
                                <td>{obj.a} : {obj.b}</td>
                            </div>                            
                            )}
                    </div>
                  

                    <div id="btn">
                    
                    <button type='submit' className="btn btn-dark btn-lg">Make it Happen</button>
                    </div>
                    </div>   
                  
                </form>

            </div>

        );
    }
}

export default Creator;