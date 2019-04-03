import React from 'react';
import Display from '../Display'

const Character = props => {
    return (
        <div>
            <Display elements={props.elements.filter((element) =>
                element.category === "character")} />
        </div>
    );

}

export default Character;