import React, { useContext, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/searchIcon.svg'
import dropDownArrow from '../../assets/dropDownArrow.svg'
import phoneDeviceHeader from "../../assets/phoneDeviceHeader.svg"
import { IsLoggedInContext, ViewFormContext } from '../../App';

const Header = () => {
  const { isLoggedIn, toggleLogin } = useContext(IsLoggedInContext);
  const {toogleViewForm} = useContext(ViewFormContext);

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='searchBar'>
        <img src={searchIcon} alt='search' />
        <input type="search" placeholder='Search for your favorite groups in ATG' />
      </div>

      {
        !isLoggedIn ?
          (
            <div className='addUser'>
              {/* <p> Create Account. <a href=''> It's free </a> </p> */}
              <p> Create Account. <button onClick={toogleViewForm}> It's free </button> </p>
            </div>
          ) :
          (
            <div className='userInfo'>
              <img className='userImg' src="https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/BestDatingProfilePhotosForMenKRAK.jpg" alt="userImg" />
              <p className='userName'> Abhinav Yishu </p>
              <img className='userDropDown' src={dropDownArrow} alt="dropDownArrow" />
            </div>
          )
      }

      <button className='afterSignIn' onClick={toggleLogin}>To see After SignIn Click Here</button>

      <div className="phoneDeviceHeader">
        <img src={phoneDeviceHeader} alt="phoneDeviceHeader" />
      </div>
    </header>
  )
}

export default Header