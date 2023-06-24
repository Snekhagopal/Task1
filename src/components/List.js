import React from 'react'

function List(props) {
    const listing=props.value
  return (
    <>
    <li>{listing}</li>
    </>
  )
}

export default List