import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const Sign_in = () => {
  return (
    <div className='container'>
        <div className='form'>
            <h1>Get more things done with  <br /> Loggin platform.</h1>
            <h4>Access to the most powerfull tool in the <br /> entire design and web industry.</h4>
            <div className='email'>
                {/* <p>Email: </p> */}
                <input type="email" name='email' placeholder='E-mail Address'/>
            </div>
            <div className='password'>
                {/* <p>Password: </p> */}
                <input type="password" name='password' placeholder='Password'/>
            </div>
            <div className='button'>
                <Link to='/welcome'>
                    <button>Welcome</button>
                </Link>
                <Link to='/sign_up'>
                    <p>Forget passsword?</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sign_in