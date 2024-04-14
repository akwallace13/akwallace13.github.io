import { useState } from 'react'

const Auth = () => {
  const [isLogIn, setisLogin] = useState(true)
  const [error, setError] = useState(null)
  //const isLogIn = false

  const viewLogin = (status) => {
    setError(null)
    setisLogin(status)
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? 'Please log in' : 'Please sign up'}</h2>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          {!isLogIn && <input type="password" placeholder="confirm password"/>}
          <input type="submit" className="create"/>
          {error && <p>{error}</p>}
        </form>
        <div className='auth-options'>
          <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLogIn ? 'turquoise' : 'white'}}>Sign Up</button>
          <button onClick={() => viewLogin(true)} style={{backgroundColor : isLogIn ? 'turquoise'
          : 'white'}}>Login</button>
        </div>
      </div>
    </div>
  );
  }
  
  export default Auth;