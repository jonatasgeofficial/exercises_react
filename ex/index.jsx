import React from 'react'
import ReactDOM from 'react-dom'
import { First, Second } from './component'

ReactDOM.render(
    <div>
        <First value="Hello" />
        <Second value="World" />
    </div>,
    document.getElementById('app')
 )