import React, { useEffect, useContext } from 'react'
import FetchContext from '../context/Fetch/FetchContext';
import UserContext from '../context/User/UserContext';
import UserCard from './UserCard';
import Spinner from './Spinner/Spinner';

export default function UserList() {

    const { users, getUsers } = useContext(UserContext);
    const { isFetching } = useContext(FetchContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        (isFetching) ? <Spinner />
            :
            <div style={{ maxHeight: "100vh", overflowX: "hidden", overflowY: "scroll" }}>
                {users.map(user => <UserCard key={user.id} user={user} />)}
            </div>

    );

}
