import React from 'react'

import './Widget.css'

function Widget({title, content}) {
  return (
    <div className="widget">
        <p className="widget-title">{title}</p>
        <div className="widget-content">{content}</div>
    </div>
  )
}

export default Widget