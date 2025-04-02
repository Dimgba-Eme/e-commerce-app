import React from 'react'
import './items.scss'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div className='items-container'>
      <div className='items-inner'>
        <Link to={`/single-item/${props.id}`}><img src={props.image} className='items-image' alt={props.name} onClick={() => window.scrollTo(0, 0)} /></Link>
        <h4 className='items-title'>{props.name}</h4>
        <p className='items-new-price'>${props.new_price}</p>
        <p className='items-old-price'>${props.old_price}</p>
      </div>

    </div>
  )
}

export default Items

