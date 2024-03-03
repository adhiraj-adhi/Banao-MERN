import React, { useState } from 'react'
import './MainNavBar.css'
import joinGroup from '../../assets/joinGroup.svg'
import dropDownArrow from '../../assets/dropDownArrow.svg'
import { IoMdExit } from "react-icons/io";

const MainNavBar = () => {

    let [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
    return (
        <>
            <div className='mainNavBar'>
                <nav className='navLeft'>
                    <ul>
                        <li><a href="#" className='active'> All Posts(32) </a></li>
                        <li><a href="#"> Article </a></li>
                        <li><a href="#"> Event </a></li>
                        <li><a href="#"> Education </a></li>
                        <li><a href="#"> Job </a></li>
                    </ul>
                </nav>

                <div className='navRight'>
                    <button className='createPost'>
                        Write a Post
                        <img src={dropDownArrow} alt="createPost" />
                    </button>

                    {
                        isUserLoggedIn ?
                            (
                                <button className='exitGroup'>
                                    <IoMdExit />&nbsp;
                                    Leave Group
                                </button>
                            ) :
                            (
                                <button className='joinGroup'>
                                    <img src={joinGroup} alt="joinGroup" />
                                    Join Group
                                </button>
                            )
                    }
                </div>
            </div>

            <div className="phoneMainNavBar">
                <p> Posts(368) </p>
                <div>Filter: All <img src={dropDownArrow} alt="dropDownArrow" /></div>
            </div>
        </>
    )
}

export default MainNavBar