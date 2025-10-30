const rightCardText = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 p-6 text-white'>
          <h3 className='text-3xl font-semibold bg-white h-12 w-12 flex justify-center items-center text-black rounded-full'>{props.id+1}</h3>
      </div>

      <div className='absolute inset-x-0 bottom-0 flex flex-col p-6 text-white'> 
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eaque ab beatae, nam recusandae quia.</p>
          <div className='mt-3 flex gap-2'>
            <button style={{backgroundColor:props.color}}className='text-white px-3 py-1 rounded'>{props.tag}</button>
            <button className='bg-white/20 text-white px-3 py-1 rounded'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
    </div>
  )
}

export default rightCardText
