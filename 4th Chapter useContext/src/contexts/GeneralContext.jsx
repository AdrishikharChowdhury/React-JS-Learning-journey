import React, { createContext, useState } from 'react'
import userData from './users.json'

export const UserContext=createContext([])

const GeneralContext = ({children}) => {
    const [users, setUsers]=useState(userData);
  return (
    <div>
        <UserContext.Provider value={{users ,setUsers}}>
            { children }
        </UserContext.Provider>
    </div>
  )
}

export default GeneralContext
