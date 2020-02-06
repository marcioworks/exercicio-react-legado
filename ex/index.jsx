import React from 'react'
import ReactDom from 'react-dom'
import Family from "./Family"
import Member from "./member"

ReactDom.render(
    <Family lastName="Silva">
        <Member name="João " />
<<<<<<< HEAD
        <Member name="José "  />
=======
        <Member name="Antônio " />
        <Member name="José " />
>>>>>>> 2fc5df9fbd484ab8402df475a139201e2a3803a3
    </Family>
    , document.getElementById('app'))