import React from 'react';

const PortfolioItem = (props) => (
    <div>   
        <h1>Thing I've done</h1>
        <p> this is the item passed in as a prop {props.match.params.id}</p>
    </div>
);

export default PortfolioItem;