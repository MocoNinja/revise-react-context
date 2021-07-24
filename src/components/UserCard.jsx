import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext';

export default function UserCard(props) {

    const { getSelectedUser } = useContext(UserContext);

    return (
        <div className="card m-4 p-3">
            <img className="card-img-top rounded-circle" src={props.user.avatar} alt="User Avatar" style={{ width: "50px" }} />
            <div className="card-title">{`${props.user.first_name} ${props.user.last_name}`}</div>
            <button className="btn btn-primary" onClick={event => getSelectedUser(props.user.id)}>See profile</button>
        </div>
    )
}
