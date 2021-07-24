import React, { useReducer } from 'react'

import { SET_FETCHING, UNSET_FETCHING } from '../actions';

import FetchContext from './FetchContext';
import FetchReducer from './FetchReducer';

export default function FetchState(props) {

    const initialState = {
        isFetching: false
    };

    const [state, dispatch] = useReducer(FetchReducer, initialState);

    const setFetching = () => {
        dispatch({
            actionName: SET_FETCHING,
            isFetching: true
        });
    }

    const unsetFetching = () => {
        dispatch({
            actionName: UNSET_FETCHING,
            isFetching: false
        });
    }

    return (
        <FetchContext.Provider value={{
            isFetching: state.isFetching,
            setFetching,
            unsetFetching
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}
