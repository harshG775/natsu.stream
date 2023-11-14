// Actions
export const Actions={
    GET_API:"get_api",
    INCREMENT:"increment",
}
// Reducer
export function DBReducer(state, action) {
    const {type,payload}=action
    switch (type) {
        case Actions.GET_API:
            return {
                ...state,
                appData:payload,
            };
        case Actions.INCREMENT:
            return {
                ...state,
                count:payload
            };
        default:
            throw new Error();
    }
}

