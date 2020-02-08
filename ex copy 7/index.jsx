import React from 'react'
import ReactDom from 'react-dom'
import StateComponent from './stateComponent'


ReactDom.render(
    <StateComponent label="Contador" initialValue={10}/>
    , document.getElementById('app'))