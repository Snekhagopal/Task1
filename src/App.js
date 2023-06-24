import React,{useState} from "react";
import './styles/Card.css'



function App() {

  const [color,setColor]=useState();
  const [nextclr,setNextclr]=useState()

  const onClickHandler=()=>{
    if(color.length >=3){
      setNextclr(true) 
      // props.nextclr.Backgroundchange(bgcolor)
      console.log('hi')
    }
    else{
      alert('Please enter valid color')
    }
  }
const changeHandler = (e) =>{
  console.log(e.target.value)
  setColor(e.target.value)
  setNextclr(false)
}

return(
  <div className="main-div">
  <div className="container" style={nextclr?{backgroundColor:color}:{backgroundColor:"black"}}>
  <h1>Choose any color to change the background</h1>
  <div className="container-ui">
  <input className="input-ui" type="text" onChange={changeHandler}>
  </input>
  <button className="button-ui" onClick={onClickHandler}>Click me to change the color</button>
  </div>
  </div>
  </div>
)
}
 


export default App;
