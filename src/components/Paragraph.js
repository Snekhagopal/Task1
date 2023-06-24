import React from 'react'

function Paragraph(props) {
  return (
    <div><p>
    {props.show}
    {props.summary}
    </p>
        </div>
  )
}

export default Paragraph