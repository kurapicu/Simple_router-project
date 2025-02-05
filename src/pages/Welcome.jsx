import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='w'>
        <p>Welcome To React</p>
        <div style={{display: 'block'}}>
          <Link to='/welcome/one'>
            <button className='buttonss'><b>One</b></button>
          </Link>
          <Link to='/welcome/two'>
            <button className='buttonss'><b>Two</b></button>
          </Link> 
        </div>
        
        <div className="buttons">
        <Link to='/'>
              <button>Sign Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
