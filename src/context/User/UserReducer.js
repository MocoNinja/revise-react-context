import { GET_USERS, GET_USER } from "../actions";

export default (state, action) => {
    const { payload, actionName } = action;

    let newState = null;

    switch (actionName) {
        case GET_USERS:
            newState = {
                ...state,
                users: payload
            };
            break;
        case GET_USER:
            newState = {
                ...state,
                selectedUser: payload
            };
            break;
        default:
            newState = state;

    }

    return newState;
}