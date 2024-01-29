import React from 'react'

type CarProp = {
    names: {
        name: string,
        model: string
    }[]
}
const PersonList = (props:CarProp) => {
  return (
    <div>
        {
props.names.map((name)=>{
    return(
        <h1>{name.name}{name.model}</h1>
    )
})
        }
    </div>
  )
}

export default PersonList