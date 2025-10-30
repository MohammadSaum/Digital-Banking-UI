import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Text from './text.jsx'
import Arrow from './arrow.jsx'

const leftSideCont = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between'>
        <Text />
        <Arrow />
    </div>
  )
}
export default leftSideCont