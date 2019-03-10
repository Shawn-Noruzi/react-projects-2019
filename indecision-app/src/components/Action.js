import React from 'react';

const Action = props => {
    return (
        <div>
            <p>Component: Action</p>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
      </button>
        </div>
    );
};

export default Action;