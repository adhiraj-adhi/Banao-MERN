import React from 'react'
import './Posts.css'
import { MdOutlineArticle } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdWork } from "react-icons/md"; //filled
import { MdWorkOutline } from "react-icons/md"; //unfilled
import { MdOutlineEventNote } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";



const Posts = (props) => {
    let post;
    if (props.contentType === "Article" || props.contentType === "Education") {
        post = (
            <>
                <div className='postImage'>
                    <img src={props.image} alt="postImg" />
                </div>
                <div className='postAbout'>
                    <p className='contentType'> {props.contentType === 'Article' ? <MdOutlineArticle /> : <MdCastForEducation />}&nbsp;&nbsp;{props.contentType} </p>
                    <div className='postHeading'>
                        <h2> {props.contentHeading} </h2>
                        <BsThreeDots style={{ cursor: "pointer" }} />
                    </div>
                    <p className='postContent'> {props.contentAbout} </p>
                </div>
            </>
        )
    } else if (props.contentType === 'Job') {
        post = (
            <>
                <div className='postAbout'>
                    <p className='contentType'> <MdWork style={{ color: "brown" }} />&nbsp;&nbsp;{props.contentType} </p>
                    <div className='postHeading'>
                        <h2> {props.contentHeading} </h2>
                        <BsThreeDots style={{ cursor: "pointer" }} />
                    </div>
                    <div className='companyAndLocation'>
                        <p className='companyName'><MdWorkOutline />&nbsp;{props.companyName}</p>
                        <p className='workLocation'><IoLocationOutline />&nbsp;{props.workLocation}</p>
                    </div>
                    <button className='redirectorBtn'>Apply on Timesjobs</button>
                </div>
            </>
        )
    } else {
        post = (
            <>
                <div className='postImage'>
                    <img src={props.image} alt="postImg" />
                </div>
                <div className='postAbout'>
                    <p className='contentType'> <MdOutlineEventNote style={{ color: "brown" }} />&nbsp;&nbsp;{props.contentType} </p>
                    <div className='postHeading'>
                        <h2> {props.contentHeading} </h2>
                        <BsThreeDots style={{ cursor: "pointer" }} />
                    </div>
                    <div className='dateAndLocation'>
                        <p className='date'><IoMdCalendar />&nbsp;{props.date}</p>
                        <p className='location'><IoLocationOutline />&nbsp;{props.location}</p>
                    </div>
                    <button className='redirectorBtn' style={{color: "#E56135"}}>Visit Website</button>
                </div>
            </>
        )
    }

    return (
        <div className="post">
            {post}
            <div className='postAuthor'>
                <div className="authorDetails">
                    <img src={props.authorImg} alt="" />
                    <p className='authorName'> {props.authorName} </p>
                </div>
                <div className="viewsAndShare">
                    <p><IoEyeOutline />&nbsp; {props.viewCount}</p>
                    <button className='sharePost'><FaShareAlt style={{ fontSize: "0.8rem", fontWeight: "300" }} /></button>
                </div>
            </div>
        </div>
    )
}

export default Posts