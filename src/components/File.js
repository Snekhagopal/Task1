import React, { useState } from "react";

function File(props) {
  const [name, setName] = useState();
  const onClickHandler = (e) => {
    setName(e.target.value);
    console.log(name)
    
  };
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    props.demo(name);
  }
  return (
    <div>
      <input
        type="text" value={name}
        placeholder="enter your name"
        onChange={onClickHandler}
      ></input>
      <button onClick={onSubmitHandler}>Submit</button>
    </div>
  );
}

export default File;
