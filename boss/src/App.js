import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext }  from "react";
import Home from './pages/home';
import Login from './components/login/login';
import Signup from './components/signup/Signup';
import Forgetpassword from './components/forgetpassword/Forgetpassword';
import { useEffect } from 'react';
import { Userauth } from './components/context/Userdata';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Chatting from './components/C-chat/Chatting';

function App() {
const {setuser}=useContext(Userauth)
const auth=getAuth() 
   useEffect(()=>{ 
      onAuthStateChanged(auth,(user)=>{
             setuser(user)
      })
   })
  return (
    <div >
      <Router> 
      <Routes> 
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgetpassword' element={<Forgetpassword/>} />
        <Route path='/chatwithus' element={<Chatting/>}/>
        </Routes> 
      </Router>
    
    </div>
  );
}

export default App;