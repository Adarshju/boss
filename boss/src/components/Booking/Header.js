import React, { useContext } from 'react';
import './BookingPage.css'
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/download.png";
import { Userauth } from '../context/Userdata';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Header = () => {
const{user}=useContext(Userauth)
const auth = getAuth()
const history=useNavigate()

  return <>
    <nav className="NavBar navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link homeb" href="">
                                    Home
                                </a>
                            </li>
                           {user ? <li className="nav-item">
                                <span style={{cursor:'pointer'}} className='nav-link' onClick={(()=>{
                                    history('/chatwithus')
                                })}  >Contact</span>
                            </li> : null}
                            
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    Booking
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="image-navBar nav-link" href="">
                                    <h5 className="boot-text">
                                        {" "}
                                        <span className="fancy"onClick={(()=>{
                                            if(!user){
                                                history('/login')
                                            }
                                           
                                        })}>{user ? user.displayName : 'Login'}</span>
                                    </h5>
                                    <img src={logo} alt="Logo" class="image-img d-inline-block align-text-top" />
                                    <hr/>
                                    <hr/>
                                    &ensp;
                                    &ensp;
                                    &ensp;
                                    <div>
                                    <span className='logout' onClick={()=>{
                                         signOut(auth).then(()=>{
                                            history('/home')
                                         })
                                    }} >{user && 'Logout'}</span>
                                    </div>
                                    
                                </a>
                               
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
  </>;
};

export default Header;