import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return(<ContentLoader 
      className='pizza-block'
      speed={0.5}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="145" r="130" /> 
      <rect x="0" y="290" rx="8" ry="8" width="280" height="25" /> 
      <rect x="0" y="334" rx="10" ry="10" width="280" height="85" /> 
      <rect x="0" y="431" rx="8" ry="8" width="90" height="25" /> 
      <rect x="110" y="431" rx="10" ry="10" width="170" height="25" />
    </ContentLoader>)
}

export default LoadingBlock
