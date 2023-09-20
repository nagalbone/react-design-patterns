import React from 'react'

const SmallPersoneListIte = ({person}) => {
    const {name,age} = person;
  return (
    <div>Name : {name} and Age: {age} years old</div>
  )
}

export default SmallPersoneListIte;