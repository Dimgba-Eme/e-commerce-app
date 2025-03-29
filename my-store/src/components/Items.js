import React from 'react'

function Items(props) {
  return (
    <div>
      <p>{props.id}</p>
      <img src={props.image} />
      <h4>{props.name}</h4>
      <p>{props.new_price}</p>
      <p>{props.old_price}</p>
      <p>{props.category}</p>

    </div>
  )
}

export default Items
