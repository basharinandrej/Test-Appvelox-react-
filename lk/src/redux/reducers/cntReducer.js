const initialState = {
    cnt: 6
}


export const cntReducer = (state = initialState, action) => {

    if (action.type === "CNT_UPDATE") {
        return {
            cnt: state.cnt - 1
        }
    }

    return state
}