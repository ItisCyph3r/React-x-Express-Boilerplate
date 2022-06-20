import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        fetch('/api')
        .then(async response => {
            const body = await response.text();
            this.setState({data: body})
        })
        
    }

    render() {
        return (
        <>
            <h1> {this.state.data} </h1>
        </>
        )
    }
}
