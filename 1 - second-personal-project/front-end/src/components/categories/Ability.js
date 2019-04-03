import React, { Component } from 'react';
import Display from '../Display'

const Ability = props => {
    return (
        <div>
            <Display elements={props.elements.filter((element) =>
                element.category === "ability")} />
        </div>
    );

}

export default Ability;