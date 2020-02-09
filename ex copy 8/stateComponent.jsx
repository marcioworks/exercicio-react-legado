import React, { Component } from 'react'

class StateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(valor) {
        this.setState({ value: this.state.value + valor })
    }
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(1)}>Inc</button>
                <button onClick={() => this.sum(-1) }>Dec</button>
            </div>
        )
    }
}

export default StateComponent