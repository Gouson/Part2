import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')
if (root !== null) {//类型收窄
  ReactDOM.render(
    <React.StrictMode>
      <div>hi</div>
    </React.StrictMode>,
    root
  )
}

