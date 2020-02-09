import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducers from './counterReducers'
import Counter from './counter'


const reducers = combineReducers({
    counter: counterReducers
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
      <Counter />
    </Provider>
    , document.getElementById('app'))