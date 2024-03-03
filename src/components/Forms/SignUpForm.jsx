import React from 'react'
// import "./FormStyles.css";
import FormImg from '../../assets/FormImg.svg';
import { IoEyeOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = (props) => {
    return (
        <div className='registerForm'>
            <p className="registerMessage"> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼 </p>
            <div className="registerFormContainer">
                <div className="registerFormLeft">
                    <h3> Create Account </h3>
                    <form>
                        <div className="nameInput">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="email" placeholder="Enter Email" /><br />
                        <span><input type="password" placeholder="Password" /> <IoEyeOutline className='viewPassword'/></span><br />
                        <input type="password" placeholder="Confirm Password" /><br />
                        <input type="submit" value="Create Account" />
                    </form>
                    <div className="registerUsingSocial">
                        <button> <FaFacebook />&nbsp; Sign up with Facebook </button>
                        <button> <FcGoogle />&nbsp; Sign up with Google </button>
                    </div>
                </div>
                <div className="registerFormRight">
                    <p className='signInRedirect'>Already have an account? <button onClick={props.toggleform}>Sign In</button></p>
                    <img src={FormImg} alt="formImg" />
                    <p className="TAndC">By signing up, you agree to our Terms & conditions, Privacy policy </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm