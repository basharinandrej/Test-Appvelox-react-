const initialState = {}

export function recordsReducer( state = initialState, action ) {

    if (action.type === "SET_RECORDS") {
        return {
            ...state,
            records: action.payload
        }
    }

    return state
}