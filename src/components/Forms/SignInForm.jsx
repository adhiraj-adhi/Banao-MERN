import React from 'react'
// import "./FormStyles.css"
import FormImg from '../../assets/FormImg.svg';
import { IoEyeOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInForm = (props) => {
  return (
    <div className='loginForm'>
      <p className="loginMessage"> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼 </p>
      <div className="loginFormContainer">
        <div className="loginFormLeft">
          <h3> Sign In </h3>
          <form>
            <input type="email" placeholder="Enter Email" /><br />
            <span><input type="password" placeholder="Password" /> <IoEyeOutline className='viewPassword' /></span><br />
            <input type="submit" value="Sign In" />
          </form>
          <div className="loginUsingSocial">
            <button> <FaFacebook />&nbsp; Sign up with Facebook </button>
            <button> <FcGoogle />&nbsp; Sign up with Google </button>
          </div>
          <p className='forgotPassword'>Forgot Password?</p>
        </div>
        <div className="loginFormRight">
          <p className='signUpRedirect'>Don’t have an account yet? <button onClick={props.toggleform}>Create new for free!</button></p>
          <img src={FormImg} alt="formImg" />
        </div>
      </div>
    </div>
  )
}

export default SignInForm