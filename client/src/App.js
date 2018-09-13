import React, { Component } from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                username:" ",
                todo: " ",
                isDone: false
            },

                {
                    username:" ",
                    todo: " ",
                    isDone: false
                }]

        }
    }


    render() {
        fetch('/api/Todos/DrWilly')
            .then(data =>
                data.json())
            .then(response=> this.setState({data: response}));




        return (
            <div className="App">
                <ToDoList arr={this.state.data}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;