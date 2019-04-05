import React, { Component } from 'react';
// import Display from '../Display'

class AdventureForm extends Component {
    state = {}
    
    render() {
        return (
            <div>
               
                    <label>NAme</label><input type="text" />
                    <label ><input type="text" /></label>
                    <label ><input type="text" /></label>
                    <label ><input type="text" /></label>

                

                
                {/* <div className='container'>
                    <Display elements={props.elements.filter((element) =>
                        element.category === "character")} />
                </div> */}


            </div>
        );
    }
}

export default AdventureForm;