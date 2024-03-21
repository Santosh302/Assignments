import React from 'react';
import './Cart.css' 
import note from '../Logo/note.png';
import calender from '../Logo/calender.png';
import public1 from '../Logo/public1.png';
import men from '../Logo/men.png';
import call from '../Logo/call.png';
import time from '../Logo/time.png';

function Cart() {
  return (
    <>
      
      <div className='card'>
        <div className='content-line'>
          <div>
          <img src={note} alt="Logo" className='logo' />
          <span className="content">782340120</span>&nbsp;&nbsp;<span className='content'>|</span>
          </div>
          <div>
          <img src={calender} alt="Logo" className='logo' />
          <span className="content">09 Mar 2023</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='content'>|</span>
          </div>
          <div>
          <img src={public1} alt="Logo" className='logo' />
          <span className="content">03</span>
          </div>
        </div>
        <div className='content-line'>
          <div>
          <img src={men} alt="Logo" className='logo' />
          <span className="content">Mr.Pankaj</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='content'>|</span>
          </div>
          <div>
          <img src={call} alt="Logo" className='logo' />
          <span className="content">+91 9923548768</span>&nbsp;<span className='content'>|</span>
          </div>
          <div>
          <img src={time} alt="Logo" className='logo' />
          <span className="content">01:30</span>
          </div>
        </div>
      </div>
    </>
 
  );
}

export default Cart;
