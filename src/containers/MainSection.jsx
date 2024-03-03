import React from 'react'
import MainNavBar from '../components/MainNavBar/MainNavBar'
import MainContent from '../components/MainContent/MainContent'

const MainSection = () => {
    let mainStyle = {
        maxWidth: "1200px",
        // margin: "auto",
        // margin: "2rem 10rem"
    }
    return (
        <div style={mainStyle} className='main'>
            <MainNavBar />
            <MainContent />
        </div>
    )
}

export default MainSection