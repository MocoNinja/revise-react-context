import React, { useReducer, useContext } from 'react'

import { GET_USER, GET_USERS } from '../actions';

import { fetchUser, fetchUsers } from '../../service/UserService';

import UserContext from './UserContext';
import UserReducer from './UserReducer';
import FetchContext from '../Fetch/FetchContext';


export default function UserState(props) {

    const fetchContext = useContext(FetchContext);

    const initialState = {
        users: [],
        selectedUser: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);


    const getUsers = async () => {
        fetchContext.setFetching();

        const data = await fetchUsers();
        dispatch({
            actionName: GET_USERS,
            payload: data
        });

        fetchContext.unsetFetching();

    }

    const getSelectedUser = async (id) => {
        const data = await fetchUser(id);
        dispatch({
            actionName: GET_USER,
            payload: data
        });
    }

    return (
        <UserContext.Provider value={
            {
                users: state.users,
                selectedUser: state.selectedUser,
                getUsers,
                getSelectedUser
            }}>
            {props.children}
        </UserContext.Provider>
    );
}
