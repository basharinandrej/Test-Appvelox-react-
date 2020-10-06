const initialState = {}


export function recordsReducer( state = initialState, action ) {

    if (action.type === "SET_RECORDS") {
        return {
            records: action.payload
        }
    } else if (action.type === "REMOVE_RECORD") {
        let cloneState = {...state}
        cloneState.records[action.payload].isArchive = true
        
        return {
            records: cloneState.records,
        }
    }

    return state
}