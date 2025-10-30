import Section1 from './assets/components/section1/section1.jsx'
import Section2 from './assets/components/section2/section2.jsx'

const users = [
    {
        image: 'https://images.unsplash.com/photo-1673922022346-d557bdd168f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        tag:'Satisfied',
        intro:'',
        color:'orange'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
        tag:'Understood',
        color:'#FF8F8F',
        intro:'' 
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
        tag:'Unburdened',
        color:'#B7A3E3',
        intro:''
    },
    {
        image: 'https://images.unsplash.com/photo-1758598307046-22f11e2a6917?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232',
        tag:'Uplifted',
        color:'#A3485A',
        intro:''
    }
]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
