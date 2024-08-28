import React, { useState } from 'react';
import "./LoginScreen.css";
import SigninScreen from '../SigninScreen/SigninScreen';


const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img 
          className='loginScreen__logo'
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt=""
        />
        <button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign In</button>
        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
        {signIn ?  (
          <SigninScreen/>
        
     
        ) : (
          <>
            <h1>Unlimited Movies, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to Watch? Enter your Email to Create or Restart your Membership.</h3>
            <div className='loginScreen__input'>
              <form>
                <input type="email" placeholder='Email Address' />
                <button 
                  onClick={() => setSignIn(true)}
                  className='loginScreen__getStarted'
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
