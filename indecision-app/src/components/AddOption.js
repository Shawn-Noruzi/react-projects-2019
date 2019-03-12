import React from 'react';


export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        //if error exists, set to var error
        this.setState(() => ({ error }));

        //after submitting an input, the input is wiped
        if (!error) {
            e.target.elements.option.value = "";
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" id="value" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
};
