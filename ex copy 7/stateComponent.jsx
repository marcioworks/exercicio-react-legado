import React, { Component } from 'react'

export default class StateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(digit) {
        this.setState({ value: this.state.value + digit })
    }


    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(1)}>Inc</button>
                <button onClick={() => this.sum(-1)}>Dec</button>
            </div>
        )
    }
}