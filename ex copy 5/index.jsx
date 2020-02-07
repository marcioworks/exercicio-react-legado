import React from 'react'
import ReactDom from 'react-dom'
import Family from "./Family"
import Member from "./member"

ReactDom.render(
    <Family lastName="Silva">
        <Member name="João " />
        <Member name="José " />
        <Member name="Antônio " />
        <Member name="Maria " />
    </Family>
    , document.getElementById('app'))