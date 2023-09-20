import React from 'react'

const LargePersoneListItem = ({person}) => {
    const {name,age,hairColor} = person;
  return (
    <div>My Name is {name} and my age is {age} and my hair color is {hairColor}</div>
  )
}

export default LargePersoneListItem;