import React from 'react'

type PersonProp = {
    name: {
        firstName: string,
        lastName: string
    }
}
const Person = ({name}:PersonProp) => {
  return (
    <div>
<h1>{name.firstName + name.lastName}</h1>
    </div>
  )
}

export default Person 