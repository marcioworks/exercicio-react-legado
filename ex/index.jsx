import React from 'react'
import ReactDom from 'react-dom'
import Family from "./Family"
import Member from "./member"

ReactDom.render(
    <Family lastName="Silva">
        <Member name="João " />
        <Member name="José "  />
    </Family>
    , document.getElementById('app'))