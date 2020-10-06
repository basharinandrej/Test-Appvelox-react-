const initialState = {
    open: false
}

export const burgerReducer = (state = initialState, action) => {

    if (action.type === "BURGER_OPEN") {
        return {
            open: !state.open
        }
    }

    return state

}