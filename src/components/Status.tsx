import React from 'react'

type StatusProp = {
    status: "loading" | "success" | "error" 
}
const Status = (props:StatusProp) => {
    let message 
    if(props.status==="loading") {
        message = "Loading"
    } else if(props.status==="success") {
        message = "Success"
    } else if (props.status==="error") {
        message = "Error"
    }
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Status