import RightCard from "./rightCard"

const rightSideCont = (props) => {
  // Repeat the users array to simulate endless scroll (e.g., 20 times)
  const repeatedUsers = Array(20).fill(props.users).flat();

  return (
    <div id='right' className='h-full flex flex-nowrap gap-10 w-2/3 overflow-x-auto rounded-4xl no-scrollbar'>
      {repeatedUsers.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.image} tag={elem.tag} color={elem.color} />
      })}
    </div>
  )
}

export default rightSideCont
