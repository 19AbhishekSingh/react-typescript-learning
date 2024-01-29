import React from 'react'

type GreetProps = {
    name:string,
    messageCount:number,
    isLoggedIn:false
}
const Greet = (props:GreetProps) => {
  return (
    <div>
        {props.isLoggedIn ? <h1>Welcome {props.name} you have {props.messageCount} unread messages.</h1> : <h1>Welcome User</h1>}
    </div>
  )
}

export default Greet