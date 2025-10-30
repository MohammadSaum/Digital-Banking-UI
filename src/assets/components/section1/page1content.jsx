import React from 'react'
import LeftSideCont from './leftSideCont.jsx'
import RightSideCont from './rightSideCont.jsx'

const page1content = (props) => {
    
  return (
    <div className=' pt-10 pb-16 px-4 gap-10 flex h-[90%]'>
        <LeftSideCont />
        <RightSideCont users={props.users}/>
    </div>
  )
}

export default page1content
