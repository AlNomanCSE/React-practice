import React from 'react'

const Skill = (props) => {
  return (
    <div>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
    </div>
  )
}

export default Skill