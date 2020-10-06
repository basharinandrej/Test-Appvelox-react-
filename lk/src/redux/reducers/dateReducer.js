const initialState = {}


export const dateReducer = (state = initialState, action) => {

    if (action.type === "SET_DATE") {
        return {
            ...state,
            date: action.payload
        }
    } else if (action.type === "ARR_DAYS") {
        return {
            ...state,
            month: action.payload
        }
    } 

    return state
}