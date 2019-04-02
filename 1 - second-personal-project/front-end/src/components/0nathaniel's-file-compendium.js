import React, { Component } from 'react';

class Compendium extends Component {
    state = {
        data: [
            {
                name: "Bob",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 200, b: 'mana'},
                    {a: 1030, b: 'stamina'},
                ]
            },
            {
                name: "jeff",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 1400, b: 'mana'},
                    {a: 1500, b: 'stamina'},
                ]
            },
            {
                name: "jeff",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 1400, b: 'mana'},
                    {a: 1500, b: 'stamina'},
                ]
            },
            {
                name: "bob",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 1400, b: 'mana'},
                    {a: 457, b: 'stamina'},
                ]
            },
            {
                name: "jeff",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 45, b: 'mana'},
                    {a: 1500, b: 'stamina'},
                ]
            },
            {
                name: "jeff",
                category: 'characters',
                subcategory: [ 
                    {a: 100, b: 'health'},
                    {a: 7574, b: 'mana'},
                    {a: 1500, b: 'stamina'},
                ]
            },

        ]
    }

    render() {
        return (
            <div className="container">

                    <table className="table">

                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Subcategories</th>
                      </tr>
                    </thead>
                
                    <tbody>
                        {this.state.data.map((o, i) => { 
                            return (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{o.name}</td>
                                    <td>{o.category}</td>
                                    {o.subcategory.map((e) => {
                                        return (
                                            <td>{`${e.b} : ${e.a}`}</td>
                                        )
                                    }  
                                )}
                                    
                                </tr>
                            )}
                        )}
                    </tbody>
                           
                  </table>
             </div>

        );
    }
}

export default Compendium;