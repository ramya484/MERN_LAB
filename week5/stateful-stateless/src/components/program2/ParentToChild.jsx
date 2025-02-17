import React from 'react'
function ParentToChild(props) {
  return (
    <div>
      <h1> Welcome to {props.name}</h1>
    </div>
  )
}
export default ParentToChild