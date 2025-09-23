import { useState ,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import { UserContext } from './contexts/GeneralContext.jsx'

function App() {
  const { users } = useContext(UserContext)
  return (
    <div className='min-h-screen h-max w-screen bg-stone-800 flex justify-between items-center p-6 flex-wrap gap-6'>
      {users.map((user,idx)=>(
        <Card key={idx} user={user} />
      ))}
    </div>
  )
}

export default App
