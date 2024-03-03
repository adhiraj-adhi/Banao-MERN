import React, { useContext, useState } from 'react'
import './MainContent.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import RecommendedGroups from './RecommendedGroups';
import Posts from './Posts';
import { IsLoggedInContext } from '../../App';

import Post1Image from '../../assets/Post1.png';
import Post2Image from '../../assets/Post2.png';
import Post3Image from '../../assets/Post3.png';

const MainContent = () => {
    const { isLoggedIn } = useContext(IsLoggedInContext);

    return (
        // contentType = "Article/ Education/ Jobs / Else (i.e. Event)"
        //  if even then date and location also pass
        <div className='mainContent'>
            <div className="mainContentLeft">
                <Posts
                    image={Post1Image}
                    // image="https://wallpapercave.com/wp/wp3775990.jpg"
                    contentType="Article"
                    contentHeading="What if famous brands had regular fonts? Meet RegulaBrands!"
                    contentAbout="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    authorImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                    authorName="Sarthak Kamra"
                    viewCount="1.4k"
                />
                <Posts
                    // image={"../../src/assets/Post2.png"}
                    image={Post2Image}
                    contentType="Education"
                    contentHeading="Tax Benefits for Investment under National Pension Scheme launched by Government"
                    contentAbout="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    authorImg="https://cdn.wallpapersafari.com/42/12/G9xp6d.jpg"
                    authorName="Sarah West"
                    viewCount="1.2k"
                />

                <Posts
                    // image={"../../src/assets/Post3.png"}
                    image={Post3Image}
                    contentType="Meetup"
                    contentHeading="Finance & Investment Elite Social Mixer @Lujiazui"
                    contentAbout=""
                    date="Fri, 12 Oct, 2018"
                    location="Ahmedabad, India"
                    authorImg="https://c0.wallpaperflare.com/preview/73/996/927/man-side-profile-profile-face.jpg"
                    authorName="Ronal Jones"
                    viewCount="1.1k"
                />

                <Posts
                    image=""
                    contentType="Job"
                    contentHeading="Software Developer"
                    contentAbout=""
                    companyName="Innovaccer Analytics Private Ltd."
                    workLocation="Noida, India"
                    authorImg="https://cdn.wallpapersafari.com/42/12/G9xp6d.jpg"
                    authorName="Sarah West"
                    viewCount="1.2k"
                />
            </div>
            <div className='mainContentRight'>
                <div className="location">
                    <div className="address">
                        <FaLocationDot style={{ color: "#000000", fontSize: "0.7rem" }} />
                        <p> Noida, India </p>
                    </div>
                    <div className="editlocation">
                        <FaPen style={{ color: "#000000", fontSize: "0.7rem" }} />
                    </div>
                </div>
                <div className="warn">
                    <RiErrorWarningLine style={{ color: "#8A8A8A", fontSize: "0.6rem" }} /> Your location will help us serve better and extend a personalised experience.
                </div>

                {
                    isLoggedIn &&
                    <div className="recommendation">
                        <h3> <AiTwotoneLike /> RECOMMENDED GROUPS </h3>

                        <RecommendedGroups
                            grpImg="https://c0.wallpaperflare.com/preview/253/954/418/camping-camp-adventure-the-stake.jpg"
                            grpName="Leisure"
                            isFollowed={true}
                        />
                        <RecommendedGroups
                            grpImg="https://thoughtcatalog.com/wp-content/uploads/2014/07/shutterstock_129179096.jpg?resize=768"
                            grpName="Philosphy"
                            isFollowed={false}
                        />
                        <RecommendedGroups
                            grpImg="https://news.virginia.edu/sites/default/files/article_image/youth_activism_header_3-2.jpg"
                            grpName="Activism"
                            isFollowed={false}
                        />

                        <div className="seeMore">
                            <a href="#">See More...</a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default MainContent