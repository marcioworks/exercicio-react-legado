import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

const reducers = combineReducers({
    field: () => ({ value: 'Opa redux' })
})
ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="digite aqui" />
    </Provider>
    , document.getElementById('app'))