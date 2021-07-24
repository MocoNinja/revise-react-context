import React, { useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext';
import UserCard from './UserCard';

export default function UserList() {

    const { users, getUsers } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{ maxHeight: "100vh", overflowX: "hidden", overflowY: "scroll" }}>
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    );

}
