import React from 'react'

type ButtonClickEvent = {
    handleClick : () => void;
}
const ButtonClick = (props:ButtonClickEvent) => {
  return (
    <div>
        <button onClick={props.handleClick}>Click Me</button>
    </div>
  )
}

export default ButtonClick