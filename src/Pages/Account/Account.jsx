import React from 'react'

import './Account.css'
function Account() {
    const user = JSON.parse(localStorage.getItem('userlogindata'));

    return (
        <div className='account__page'>

            <div className='account__accountLeftPart'>
                <div className='account__accountProfile'>
                    <div className='account__accountProfileImage'>
                        <img src={user.photo} alt="" />
                    </div>
                    <div className='account__accountProfileInfo'>
                        <p className='account__accountProfileInfoName'>{user.name}</p>
                        <p className='account__accountProfileInfoEmail'>{user.email}</p>
                        <p>{user.metadata.lastLoginAt}</p>
                    </div>
                </div>
            </div>
            <div className='account__accountRightPart'>

            </div>

        </div>
    )
}

export default Account