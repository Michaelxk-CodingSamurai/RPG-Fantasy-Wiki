import React, { Component } from 'react';
import Display from '../Display'

const Location = props => {
    return (
        <div>
            <Display elements={props.elements.filter((element) =>
                element.category === "location")} />
        </div>
    );

}

export default Location;