import React from 'react'

const RecommendedGroups = (props) => {
    return (
        <>
            <div className="groups">
                <img src={props.grpImg} alt="grpImg" />
                <p className='groupName'> {props.grpName} </p>
                {
                    !props.isFollowed ? <button className='followBtn'> Follow </button> : <button className='unfollowBtn'> Followed </button>
                }
                {/* <button className='followBtn'> Follow </button> */}
                {/* <button className='unfollowBtn'> Followed </button> */}
            </div>
        </>
    )
}

export default RecommendedGroups