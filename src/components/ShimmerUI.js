import React from 'react'
// import { ShimmerPostList,ShimmerPostItem } from "react-shimmer-effects";

export default function ShimmerUI() {
  return (
    <div className='shimmer-container'>
      {
        Array(9).fill("").map((e,index)=>(
          <div key={index} className="shimmer-card">
              <h3 className="card-title" id="title"></h3>
          </div>
        ))
      }  
    </div>

    //   {
    //     Array(10).fill("").map((e,index)=>(
    //       <div className="shimmer-card">
    //         <div className="shimmerBG media"></div>
    //         <div className="p-32">
    //           <div className="shimmerBG title-line"></div>
    //           <div className="shimmerBG title-line end"></div>
    //           <div className="shimmerBG content-line m-t-24"></div>
    //           <div className="shimmerBG content-line"></div>
    //         </div>
    //       </div>
    //       ))
    //   }
  )
}
