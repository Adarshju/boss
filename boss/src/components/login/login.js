import React, { useState } from 'react'
import './login.css'
import {signInWithEmailAndPassword,getAuth} from "firebase/auth";
import { doc } from 'firebase/firestore';
import db from '../../firebase/config';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
    const [gmail, setgmail] = useState('')
    const [password, setpassword] = useState('')
    const [erroremail, seterror] = useState('')
    const negative=useNavigate()
    const auth =getAuth()
    console.log(erroremail);
    const handlesubmit = (e) => {
        e.preventDefault()
        doc(db, 'users', 'alovelace');
        console.log('success');
        signInWithEmailAndPassword(auth,gmail,password).then((data) => {
         negative('/')
            seterror('')
        }).catch((err) => {
            console.log(err.message);
            seterror('email or password invalid')
        })
    }
    return (
        <div className='login'>
            <div className="content">
                <div className="logintext">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="inputtext">
                        <input className='gamil' value={gmail} onChange={((e) => { setgmail(e.target.value) })} type="text" placeholder='Enter Your Email' />
                        <input className='password' value={password} onChange={((e) => { setpassword(e.target.value) })} type="text" placeholder='Enter Your Email' />
                    </div>
                    <div className="forget">
                        <Link to='/forgetpassword' ><h4 className='forgettext'>Forgot Password</h4></Link>
                    </div>
                    <div>
                        <button className='button' type='sumit' >Submit</button>
                    </div>
                    <div className="emailerror">
                        <span>{erroremail ? erroremail : null}</span>
                    </div>
                    <div className='signup'>
                        <h3 onClick={(()=>{
                            negative('/signup')
                        })}>Create Account</h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login