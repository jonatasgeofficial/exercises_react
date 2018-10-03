import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Caiado">
        <Member firstName="John" />
        <Member firstName="Charles" />
    </Family>,
    document.getElementById('app')
 )