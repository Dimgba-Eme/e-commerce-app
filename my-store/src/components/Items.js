import React from 'react'
import './items.scss'

function Items(props) {
  return (
    <div className='items-container'>
      <div className='items-inner'>
        <img src={props.image} className='items-image' />
        <h4 className='items-title'>{props.name}</h4>
        <p className='items-new-price'>${props.new_price}</p>
        <p className='items-old-price'>${props.old_price}</p>
      </div>

    </div>
  )
}

export default Items

