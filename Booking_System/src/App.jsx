import React from 'react';
import './App.css'; 
import Cart from './component/Cart'
 


function App() {
  return (
    <div className='Layout'>
      {/* top header section Section */}
      <div className="header">
        <p>upper space left for time and browser link</p>
      </div>

      {/* Booking Section */}
      <div className="booking">
        <i className="arrow fas fa-arrow-left"></i>
        <h3>Bookings</h3>
        <i className="fas fa-ellipsis-v"></i>
      </div>

      {/* date section */}
      <div className='date'>
        <i className="fa-solid fa-less-than"></i>
        <span>9 March 2024</span>
        <i className="fa-solid fa-greater-than"></i>
      </div>

      {/* buttons Section */}
      <div>
        <button className="active">All | 05</button>
        <button>Pending &nbsp; &nbsp;| 02</button>
        <button>Accepted &nbsp; &nbsp; | 01</button>
        <button>Waitlist &nbsp; &nbsp; | 01</button>
        <button>Declined &nbsp; &nbsp; | 01</button>
      </div>

      {/* Pending Section */}
      <button className='active' >Pending &nbsp;&nbsp; | 02</button>
      <div className='first-cart'>
      <Cart  />
      <div className='small-div'></div>
      </div>
      
      <div className='three-button'>
        <button className='first-button'>Accepte</button>
        <button className='second-button'>Waitlist</button>
        <button className='third-button'>Decline</button>
      </div>

      <button className='first' >Accepted &nbsp;&nbsp; | 01</button>
      <Cart  />

      <button className='second' >Waitlist &nbsp;&nbsp; | 01</button>
      <Cart  />

      <button className='third' >Declined &nbsp;&nbsp; | 01</button>
      <Cart  />
     

      {/* Lower footer section Section */}
      <div className="footer">
        <p>Lower space left for broswer link</p>
      </div>
    </div>
  );
}

export default App;
