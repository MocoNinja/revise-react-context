import React, { useReducer } from 'react'

import { GET_USER, GET_USERS } from '../actions';

import { fetchUser, fetchUsers } from '../../service/UserService';

import UserContext from './UserContext';
import UserReducer from './UserReducer';

export default function UserState(props) {
    const initialState = {
        users: [],
        selectedUser: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const data = await fetchUsers();
        dispatch({
            actionName: GET_USERS,
            payload: data
        });
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
