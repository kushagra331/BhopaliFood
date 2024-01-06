import React from 'react'
// import { ShimmerPostList,ShimmerPostItem } from "react-shimmer-effects";

export default function ShimmerUI() {
  return (
    <div className='shimmer-container'>
      {
        Array(10).fill("").map((e,index)=>(
          <div key="index" className="shimmer-card">
            <h3 class="card-title animated-bg animated-bg-text" id="title"></h3>
          </div>
        ))
      }  
    </div>
  )
}
