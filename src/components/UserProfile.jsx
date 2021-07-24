import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

export default function UserProfile() {

    const { selectedUser } = useContext(UserContext);

    return (
        <div>
            {
                selectedUser ? <div>{`Contact ${selectedUser.first_name} ${selectedUser.last_name} at: ${selectedUser.email}`}</div> : ""
            }
        </div>
    )
}
