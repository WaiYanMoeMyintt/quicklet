import React from 'react'
import { useParams } from 'react-router-dom'
const CommonTask = () => {
  const { name} =  useParams();
  console.log(name)
  return (
    <div>{name}</div>
  )
}

export default CommonTask