import React from 'react';
import Chatting from '../components/C-chat/Chatting';
import Navbar from '../components/NavBar/Navbar';
import BookingPage from '../components/Booking/BookingPage';
import Header from '../components/Booking/Header';

function Home() {
  return (
    <div>
       <Header></Header>
       <Navbar></Navbar>
       
       <BookingPage></BookingPage>
      
    </div>
  )
}

export default Home