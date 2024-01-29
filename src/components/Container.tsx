import React from 'react'
type ContainerStyleProps = {
    styles:React.CSSProperties 
}
const Container = (props:ContainerStyleProps) => {
  return (
    <div>
        <h1 style={props.styles}>Container</h1>
    </div>
  )
}

export default Container