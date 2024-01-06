import React from 'react'
import Card from './Card'
export default function CardBox() {
  return (
    <div>
       <div className="search-bar">
          <div className="search">
            <input type="text" placeholder="   Search..." />
            <button type="button"></button>
          </div>
        </div>
      <Card/>
    </div>
  )
}
