import React from 'react';
import Display from '../Display'

const Item = props => {
    return (
        <div>
            <Display elements={props.elements.filter((element) =>
                element.category === "item")} />
        </div>
    );

}

export default Item;