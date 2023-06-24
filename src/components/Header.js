import React,{useState} from 'react'
import Paragraph from './Paragraph' 

function Header(props) {
 
  return (
    <div>
    <h2>{props.name}</h2>
    <Paragraph summary={props.name}/>
</div>
  )
}

export default Header