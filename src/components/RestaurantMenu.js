import React from 'react'
import { useParams } from 'react-router-dom'

export default function RestaurantMenu() {
    const params = useParams();
    const {id}=params
  return (
    <div>
      <h1>Restaurant Menu{ id } </h1>
    </div>
  )
}
