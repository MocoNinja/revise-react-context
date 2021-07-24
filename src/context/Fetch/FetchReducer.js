export default (state, action) => {
    const { isFetching } = action;

    const newState = {
        ...state,
        isFetching: isFetching
    };

    return newState;

}