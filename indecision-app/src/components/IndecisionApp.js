import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
    options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "this option already exists";
        }
        this.setState(prevState => ({ options: prevState.options.concat(option) }));
    };
    //lifecycle methods
    componentDidMount () {
        //try catch for json syntax errors
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Do nothing if json invalid
        }
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            //takes options object and makes it into a string.
            const json = JSON.stringify(this.state.options);

            //store the json stringed object, with key of options, into localStorage.
            localStorage.setItem("options", json);
            console.log("saving data ");
        }
    }
    componentWillUnmount () {
        console.log("component will unmount");
    }
  

    render() {
        const subtitle = "Put your life in the hands of an apple";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};

