import React from 'react';
import Option from './Option';

const Options = props => {
    return (
        <div>
            <p>Component : Options </p>
            {props.options.length === 0 && (
                <p>Add some options into the options array</p>
            )}
            {props.options.map(option => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
        </div>
    );
};

export default Options;