import React, { createContext, useState } from 'react'

export const Userauth=createContext(null)
function Userdata({children}) {
    const [user,setuser]=useState(null)
  return (
    <Userauth.Provider value={{user,setuser}}>
       {children}
    </Userauth.Provider>
  )
}

export default Userdata