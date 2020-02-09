import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducers from './fieldReducers'


const reducers = combineReducers({
    field: fieldReducers
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="Digite" />
    </Provider>
    , document.getElementById('app'))