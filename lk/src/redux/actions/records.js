import axios from "axios";


export function fetchRecords() { 
    return async dispatch => {
        try {
            axios.get(`http://localhost:3001/records`).then(({ data }) => {
                dispatch(setRecords(data));
            })
        } catch (e) {
            console.log('e', e)
        }
    }
}



export const setRecords = item => {
    return {
        type: "SET_RECORDS",
        payload: item
    }
}


export const removeAction = item => {
    return {
        type: 'REMOVE_RECORD',
        payload: item
    }
}