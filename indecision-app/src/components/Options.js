import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}>
            Remove All Options
        </button>
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

        
    </div>
);

export default Options;