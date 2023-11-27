import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import './Forgetpassword.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Forgetpassword() {
    const [resetpassword,setresetpassword]=useState('')
    const history=useNavigate()
   const auth=getAuth()
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(resetpassword);
        sendPasswordResetEmail(auth,resetpassword).then((data)=>{
            alert('password reset link sended')
            history('/login')
        })
    }
  return (
    <div>
         <div className='login'>
            <div className="content">
                <div className="logintext">
                    <h1>Forget Passowrd</h1>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="inputtext">
                        <input className='gamil' value={resetpassword} onChange={((e)=>{setresetpassword(e.target.value)})} type="text" placeholder='Enter Your EmailFor Forgeting' />
                       
                    </div>
                    <div>
                        <button className='button' type='sumit' >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword