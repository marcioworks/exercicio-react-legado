import React from 'react'
import ReactDom from 'react-dom'
import Family from "./Family"
import Member from "./member"

ReactDom.render(
    <Family>
        <Member name="João " lastName="Silva"/>
    </Family>
    , document.getElementById('app'))