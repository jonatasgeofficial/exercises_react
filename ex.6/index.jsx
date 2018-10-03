import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member firstName="John" lastName="Silva" />
        <Member firstName="Charles" lastName="Silva" />
        <Member firstName="Isabel" lastName="Silva" />
        <Member firstName="Jonathan" lastName="Silva" />
    </Family>,
    document.getElementById('app')
 )