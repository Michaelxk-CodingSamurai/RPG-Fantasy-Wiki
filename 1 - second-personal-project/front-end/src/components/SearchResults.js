import React, { Component } from 'react';
import Display from './Display'

class SearchResults extends Component {
    state = {}
    render() { 
        console.log(this.props.elements, this.props.search)
        return (
            <div>
                
            <Display elements={this.props.elements.filter((element) =>
                 element.name.toLowerCase().search(this.props.search) !== -1
                )} />
            </div>
          );
    }
}
 
export default SearchResults;