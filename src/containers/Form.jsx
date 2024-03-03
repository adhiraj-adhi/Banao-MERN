import React, { useState, useContext } from 'react'
import "../components/Forms/FormStyles.css";
import SignUpForm from '../components/Forms/SignUpForm'
import { IoIosCloseCircle } from "react-icons/io";
import SignInForm from '../components/Forms/SignInForm';
import { ViewFormContext } from '../App';

const Form = () => {
    
    // show form related code:
    const { viewForm, toogleViewForm } = useContext(ViewFormContext);

    // let formContainerStyle = {
    //     // width: "600px",
    //     // // height: "325px",
    //     // position: "fixed",
    //     // top: "75%",
    //     // left: "50%",
    //     // transform: "translate(-50%, -75%)",
    //     // zIndex: "10",
    // }


    let [showRegisterForm, setShowRegisterForm] = useState(true);
    function toggleform() {
        setShowRegisterForm(prevState => !prevState);
    }


    return (

        viewForm ? (
            <div className='formContainer'>
                <IoIosCloseCircle style={{
                    // backgroundColor: "#ffffff",
                    position: "absolute",
                    right: "-10px",
                    top: "-30px",
                    fontSize: "1.5rem",
                    color: "#D9D9DB",
                    cursor: "pointer"
                }} onClick={toogleViewForm}
                />


                {showRegisterForm ? <SignUpForm toggleform={toggleform} /> : <SignInForm toggleform={toggleform} />}



            </div >
        ) : null


        // <div className='formContainer' style={formContainerStyle}>
        //     <IoIosCloseCircle style={{
        //         // backgroundColor: "#ffffff",
        //         position: "absolute",
        //         right: "-10px",
        //         top: "-30px",
        //         fontSize: "1.5rem",
        //         color: "#D9D9DB",
        //         cursor: "pointer"
        //     }}
        //     />

        //     {
        //         showRegisterForm ? <SignUpForm toggleform={toggleform} /> : <SignInForm toggleform={toggleform} />
        //     }


        // </div>
    )
}

export default Form