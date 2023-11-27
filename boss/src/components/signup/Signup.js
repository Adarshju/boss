import React, { useState } from 'react'
import './Signup.css'
import db from '../../firebase/config'
import {addDoc,collection} from 'firebase/firestore'
import { createUserWithEmailAndPassword,getAuth,sendEmailVerification,updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
    const [gmail,setgmail]=useState('')
    const [password,setpassword]=useState('')
    const [firstname,setfirstname]=useState('')
    const[lastname,setlastname]=useState('')
    const [number,setnumber]=useState()
    const histroy=useNavigate()

 const handlesubmit=(e)=>{
    e.preventDefault()
      const auth = getAuth()
      createUserWithEmailAndPassword(auth,gmail,password).then((data)=>{
        sendEmailVerification(data.user)
        updateProfile(data.user,{displayName:firstname}).then(()=>{
            addDoc(collection(db,'users'),{
                id:data.user.uid,
                username:firstname,
                mobilenumber:number
            }).then(()=>{
                   histroy('/login')
            })
        })
       
      })
}

  return (
    <div>
          <div className='login'>
            <div className="content">
                <div className="logintext">
                    <h1>Signup</h1>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="inputtext">
                        <input className='gamil'  value={gmail} onChange={((e)=>{setgmail(e.target.value)})} type="text" placeholder='Enter Your Email' />
                        <input className='password' value={password} onChange={((e)=>{setpassword(e.target.value)})}  type="text" placeholder='password' />
                        <input className='gamil' value={firstname} onChange={((e)=>{setfirstname(e.target.value)})} type="text" placeholder='Enter your First Name' />
                        <input className='password' value={lastname} onChange={((e)=>{setlastname(e.target.value)})}  type="text" placeholder='Enter your last name' />
                        <input className='gamil' value={number} onChange={((e)=>{setnumber(e.target.value)})} type="number" placeholder='Enter Your mobile number' />
                    </div>
                    <div className="forget">
                        <h4 className='forgettext' onClick={(()=>{
                            histroy('/login')
                        })}>I have A Account</h4>
                    </div>
                    <div>
                        <button className='button' type='sumit' >Submit</button>
                    </div>
                    <div className="emailerror">
                        <span></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
