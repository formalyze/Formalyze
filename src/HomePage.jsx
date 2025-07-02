import React from 'react';
import "./HomePage.css";
function HomePage() {
  return (
    <>
    <div id='box'>
    <div id='sp' className='divisions'>
      <h1>Registration</h1>
      <input type="text" placeholder='User-name'></input>
      <br></br>
      <br></br>
      <input type="email" placeholder='Email'></input>
      <br></br>
      <br></br>
      <input type="password" placeholder='Password'></input>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
      <br></br>
      <h5>or register with social platforms</h5>
      <button>google</button>
      <button>facebook</button>
    </div>
    <div id='lp' className='divisions'>
      <h1>Login</h1>
      <input type="text" placeholder='User-name'></input>
      <br></br>
      <br></br>
      <input type="password" placeholder='Password'></input>
      <br></br>
      <h5>Forgot password ?</h5>
      <button>login</button>
      <h5>Login using other platforms</h5>
      <button>google</button>
      <button>facebook</button>
    </div>
    <div id='login' className='divisions'>
      <h1>Welcome back!</h1>
      <h5>Already have an account</h5>
      <button>login</button>
    </div>
    <div id='signup' className='divisions'>
      <h1>Hello welcome!</h1>
      <h5>Dont have an account</h5>
      <button>Sign up</button>
    </div>
    </div>
    
     </>
  );
}

export default HomePage;