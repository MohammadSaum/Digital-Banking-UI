import RightCardText from "./rightCardText"

const rightCard = (props) => {
  return (
    <div>
      <div className='w-80 h-162 overflow-hidden rounded-4xl relative'>
      <img
        className='w-full h-full object-cover'
        src={props.img}
        alt="working professional image"
      />
    <div className='absolute inset-0 bg-black/30 pointer-events-none' />
    <RightCardText id={props.id} tag={props.tag} color={props.color}/>
    </div>
    </div>
  )
}

export default rightCard
